import { EventEmitter } from 'node:events';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ShortcutWebhookClient,
  ShortcutWebhookError,
  signShortcutWebhookBody,
  signShortcutWebhookHeaders,
  verifyShortcutWebhookHeaders,
} from '../index';
import { observer, secret, sessionPrompted, signed } from './fixtures';

// Shortcut signs every agent webhook with Shortcut-Signature, the HMAC of
// `${timestamp}.${delivery}.${body}`, and still sends the body-only
// Payload-Signature until sc-322342. The clock is frozen so the 300-second
// window has an exact boundary.
describe('Shortcut-Signature headers', () => {
  const now = 1_700_000_000;
  const client = new ShortcutWebhookClient(secret);

  beforeEach(() => {
    vi.useFakeTimers({ now: now * 1000, toFake: ['Date'] });
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  async function signedRequest(
    body: unknown,
    options: {
      secret?: string;
      timestamp?: string;
      delivery?: string;
      headers?: Record<string, string>;
      omit?: string[];
      send?: string;
    } = {},
  ) {
    const text = JSON.stringify(body);
    const headers: Record<string, string> = {
      'content-type': 'application/json',
      ...(await signShortcutWebhookHeaders(options.secret ?? secret, text, {
        delivery: options.delivery ?? 'delivery-1',
        timestamp: options.timestamp,
      })),
      ...options.headers,
    };
    for (const name of options.omit ?? []) delete headers[name];
    return new Request('https://agent.example/webhook', {
      method: 'POST',
      body: options.send ?? text,
      headers,
    });
  }

  it('signs the timestamp, delivery id, and body the way Shortcut does', async () => {
    // Known-answer vector from clubhouse.lib.webhook-signature's tests.
    expect(
      await signShortcutWebhookHeaders('test-secret', '{"id":"evt_1"}', {
        delivery: 'delivery-1',
        timestamp: '1700000000',
      }),
    ).toEqual({
      'shortcut-timestamp': '1700000000',
      'shortcut-signature':
        '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
      'shortcut-delivery': 'delivery-1',
      'payload-signature':
        'c0bd8e4de35355b11e7e98d53bb0d0122736ca05c58eb9c138a2dfa24725ac6d',
    });
    const fresh = await signShortcutWebhookHeaders(
      'test-secret',
      Buffer.from('{"id":"evt_1"}'),
      { delivery: 'delivery-1' },
    );
    expect(fresh['shortcut-timestamp']).toBe('1700000000');
    expect(fresh['shortcut-signature']).toBe(
      '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
    );
  });

  it('accepts a delivery signed with the new headers and hands its delivery id to handlers', async () => {
    const delivery = await client.verify(
      await signedRequest(observer, { delivery: 'c1d2e3f4-0000-4000-8000-1' }),
    );
    expect(delivery.payload).toEqual(observer);
    expect(delivery.deliveryId).toBe('c1d2e3f4-0000-4000-8000-1');
    expect(delivery.signatureScheme).toBe('shortcut-signature');
    const handler = client.createHandler();
    const seen: Array<string | undefined> = [];
    handler.on('observer', (_payload, received) => {
      seen.push(received.deliveryId);
    });
    const response = await handler(
      await signedRequest(observer, { delivery: 'c1d2e3f4-0000-4000-8000-1' }),
    );
    expect(response.status).toBe(200);
    expect(seen).toEqual(['c1d2e3f4-0000-4000-8000-1']);
  });

  it('verifies a body already read against a Headers object or a header record', async () => {
    const text = JSON.stringify(sessionPrompted);
    const headers = await signShortcutWebhookHeaders(secret, text, {
      delivery: sessionPrompted.id,
    });
    const fromRecord = await client.verifyBody(Buffer.from(text), headers);
    expect(fromRecord.deliveryId).toBe('event-2');
    expect(fromRecord.signatureScheme).toBe('shortcut-signature');
    const fromHeaders = await client.verifyBody(
      new TextEncoder().encode(text),
      new Headers(headers),
    );
    expect(fromHeaders.payload).toEqual(sessionPrompted);
    const mixedCase = Object.fromEntries(
      Object.entries(headers).map(([name, value]) => [
        name.replace(/(^|-)[a-z]/g, (letter) => letter.toUpperCase()),
        value,
      ]),
    );
    expect(Object.keys(mixedCase)).toContain('Shortcut-Signature');
    const fromMixedCase = await client.verifyBody(Buffer.from(text), mixedCase);
    expect(fromMixedCase.deliveryId).toBe('event-2');
  });

  it.each([
    [
      'a tampered body',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          send: JSON.stringify({ ...observer, id: 'delivery-9' }),
        }),
    ],
    [
      'a wrong delivery id',
      'invalid_signature',
      async () =>
        signedRequest(observer, { headers: { 'shortcut-delivery': 'other' } }),
    ],
    [
      'a wrong timestamp',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          headers: { 'shortcut-timestamp': String(now + 1) },
        }),
    ],
    [
      'a timestamp 301 seconds old',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now - 301) }),
    ],
    [
      'a timestamp 301 seconds ahead',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now + 301) }),
    ],
    [
      'a fractional timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { timestamp: `${now}.0` }),
    ],
    [
      'a timestamp in milliseconds, well-formed but 54,000 years ahead',
      'stale_timestamp',
      async () => signedRequest(observer, { timestamp: String(now * 1000) }),
    ],
    [
      'a non-numeric timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { timestamp: 'now' }),
    ],
    [
      'a missing timestamp',
      'invalid_signature',
      async () => signedRequest(observer, { omit: ['shortcut-timestamp'] }),
    ],
    [
      'a missing delivery id',
      'invalid_signature',
      async () => signedRequest(observer, { omit: ['shortcut-delivery'] }),
    ],
    [
      'an invalid Shortcut-Signature beside a valid Payload-Signature',
      'invalid_signature',
      async () =>
        signedRequest(observer, {
          headers: { 'shortcut-signature': '0'.repeat(64) },
        }),
    ],
    [
      'a signature under another secret',
      'invalid_signature',
      async () => signedRequest(observer, { secret: 'other' }),
    ],
    [
      'an empty Shortcut-Signature beside a valid Payload-Signature',
      'invalid_signature',
      async () =>
        signedRequest(observer, { headers: { 'shortcut-signature': '' } }),
    ],
    [
      'an empty delivery id',
      'invalid_signature',
      async () =>
        signedRequest(observer, { headers: { 'shortcut-delivery': '' } }),
    ],
  ])('rejects %s with %s', async (_label, code, make) => {
    const error = await client
      .verify(await make())
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe(code);
    expect((error as ShortcutWebhookError).status).toBe(401);
  });

  it('accepts a timestamp exactly 300 seconds from the clock, either way', async () => {
    for (const timestamp of [String(now - 300), String(now + 300)]) {
      const delivery = await client.verify(
        await signedRequest(observer, { timestamp }),
      );
      expect(delivery.signatureScheme).toBe('shortcut-signature');
    }
  });

  it('falls back to Payload-Signature only when Shortcut-Signature is absent, unless disabled', async () => {
    const legacy = await client.verify(await signed(observer));
    expect(legacy.signatureScheme).toBe('payload-signature');
    expect(legacy.deliveryId).toBe('delivery-1');
    const strict = new ShortcutWebhookClient(secret, {
      allowLegacySignature: false,
    });
    const error = await strict
      .verify(await signed(observer))
      .catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(ShortcutWebhookError);
    expect((error as ShortcutWebhookError).code).toBe('invalid_signature');
    expect((error as ShortcutWebhookError).status).toBe(401);
    const accepted = await strict.verify(await signedRequest(observer));
    expect(accepted.signatureScheme).toBe('shortcut-signature');
    const handler = strict.createHandler();
    expect((await handler(await signed(observer))).status).toBe(401);
    expect((await handler(await signedRequest(observer))).status).toBe(200);
    const text = JSON.stringify(observer);
    const bare = await strict
      .verifyBody(
        Buffer.from(text),
        await signShortcutWebhookBody(secret, text),
      )
      .catch((caught: unknown) => caught);
    expect((bare as ShortcutWebhookError).code).toBe('invalid_signature');
  });

  it('does not apply the payload timestamp window to a delivery verified by Shortcut-Signature', async () => {
    const strict = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 60_000,
    });
    const stale = { ...observer, timestamp: '2020-01-01T00:00:00.000Z' };
    expect((await strict.verify(await signedRequest(stale))).payload).toEqual(
      stale,
    );
    const session = await strict.verify(
      await signedRequest(sessionPrompted, { delivery: sessionPrompted.id }),
    );
    expect(session.deliveryId).toBe('event-2');
    const legacy = await strict
      .verify(await signed(stale))
      .catch((caught: unknown) => caught);
    expect((legacy as ShortcutWebhookError).code).toBe('stale_timestamp');
  });

  it('serves the new headers to the Node.js handler', async () => {
    const handler = client.createHandler();
    const seen: Array<string | undefined> = [];
    handler.on('session.prompted', (_payload, delivery) => {
      seen.push(delivery.deliveryId);
    });
    const text = JSON.stringify(sessionPrompted);
    const message = Object.assign(new EventEmitter(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(await signShortcutWebhookHeaders(secret, text, {
          delivery: sessionPrompted.id,
        })),
      },
      destroy() {},
      async *[Symbol.asyncIterator]() {
        yield Buffer.from(text);
      },
    });
    const response = {
      statusCode: 0,
      setHeader() {},
      end() {},
    };
    await handler(message as never, response as never);
    expect(response.statusCode).toBe(200);
    expect(seen).toEqual(['event-2']);
  });

  it('verifyShortcutWebhookHeaders reports the scheme, the delivery id, and why a request failed', async () => {
    const body = '{"id":"evt_1"}';
    const headers = {
      'shortcut-timestamp': '1700000000',
      'shortcut-delivery': 'delivery-1',
      'shortcut-signature':
        '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
    };
    const verified = {
      verified: true,
      scheme: 'shortcut-signature',
      deliveryId: 'delivery-1',
    };
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders(
        'test-secret',
        new TextEncoder().encode(body),
        new Headers(headers),
      ),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, {
        ...headers,
        'shortcut-delivery': 'delivery-2',
      }),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(
      await verifyShortcutWebhookHeaders('other-secret', body, headers),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(await verifyShortcutWebhookHeaders('', body, headers)).toEqual({
      verified: false,
      reason: 'invalid_signature',
    });
    vi.setSystemTime((now + 301) * 1000);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual({ verified: false, reason: 'stale_timestamp' });
    const legacy = {
      'payload-signature':
        'c0bd8e4de35355b11e7e98d53bb0d0122736ca05c58eb9c138a2dfa24725ac6d',
    };
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, legacy),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, legacy, {
        allowLegacySignature: false,
      }),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(await verifyShortcutWebhookHeaders('test-secret', body, {})).toEqual(
      { verified: false, reason: 'invalid_signature' },
    );
    // A header bag whose get() answers undefined for a missing header, as a
    // Map or an untyped framework wrapper does, has no Shortcut-Signature.
    const bag = new Map(Object.entries(legacy));
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, bag as never),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
  });
});
