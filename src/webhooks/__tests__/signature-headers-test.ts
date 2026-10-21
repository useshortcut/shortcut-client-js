import { EventEmitter } from 'node:events';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ShortcutWebhookClient,
  ShortcutWebhookError,
  signShortcutWebhookBody,
  signShortcutWebhookHeaders,
  verifyShortcutWebhookHeaders,
} from '../index';
import {
  interaction,
  observer,
  secret,
  sessionPrompted,
  signed,
} from './fixtures';

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
      deliveryId?: string;
      headers?: Record<string, string>;
      omit?: string[];
      send?: string;
    } = {},
  ) {
    const text = JSON.stringify(body);
    const headers: Record<string, string> = {
      'content-type': 'application/json',
      ...(await signShortcutWebhookHeaders(options.secret ?? secret, text, {
        deliveryId: options.deliveryId ?? 'delivery-1',
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
        deliveryId: 'delivery-1',
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
      { deliveryId: 'delivery-1' },
    );
    expect(fresh['shortcut-timestamp']).toBe('1700000000');
    expect(fresh['shortcut-signature']).toBe(
      '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
    );
  });

  // Under Shortcut-Signature the header is the per-delivery key. Under the
  // Payload-Signature fallback the payload id stands in, and for observer and
  // interaction bodies that is the transaction key, which every interaction
  // one save produces shares. Session events have no fallback.
  it.each([
    ['an observer', observer, 'delivery-1'],
    ['an interaction', interaction, 'delivery-2'],
  ])(
    'reports the Shortcut-Delivery header, or the payload id under Payload-Signature, for %s',
    async (_label, body, payloadId) => {
      const header = await client.verify(
        await signedRequest(body, { deliveryId: 'a0b1c2d3-header-id' }),
      );
      expect(header.signatureScheme).toBe('shortcut-signature');
      expect(header.deliveryId).toBe('a0b1c2d3-header-id');
      const legacy = await client.verify(await signed(body));
      expect(legacy.signatureScheme).toBe('payload-signature');
      expect(legacy.deliveryId).toBe(payloadId);
    },
  );

  it('accepts a delivery signed with the new headers and hands its delivery id to handlers', async () => {
    const delivery = await client.verify(
      await signedRequest(observer, {
        deliveryId: 'c1d2e3f4-0000-4000-8000-1',
      }),
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
      await signedRequest(observer, {
        deliveryId: 'c1d2e3f4-0000-4000-8000-1',
      }),
    );
    expect(response.status).toBe(200);
    expect(seen).toEqual(['c1d2e3f4-0000-4000-8000-1']);
  });

  it('verifies a body already read against a Headers object or a header record', async () => {
    const text = JSON.stringify(sessionPrompted);
    const headers = await signShortcutWebhookHeaders(secret, text, {
      deliveryId: sessionPrompted.id,
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

  it('bounds Shortcut-Timestamp, not the payload timestamp, by timestampToleranceMs', async () => {
    const strict = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 60_000,
    });
    const stale = { ...observer, timestamp: '2020-01-01T00:00:00.000Z' };
    expect((await strict.verify(await signedRequest(stale))).payload).toEqual(
      stale,
    );
    const legacy = await strict
      .verify(await signed(stale))
      .catch((caught: unknown) => caught);
    expect((legacy as ShortcutWebhookError).code).toBe('stale_timestamp');
    const recent = await strict.verify(
      await signedRequest(sessionPrompted, {
        deliveryId: sessionPrompted.id,
        timestamp: String(now - 30),
      }),
    );
    expect(recent.deliveryId).toBe('event-2');
    for (const timestamp of [String(now - 200), String(now + 200)]) {
      const error = await strict
        .verify(await signedRequest(observer, { timestamp }))
        .catch((caught: unknown) => caught);
      expect(error).toBeInstanceOf(ShortcutWebhookError);
      expect((error as ShortcutWebhookError).code).toBe('stale_timestamp');
      expect((error as ShortcutWebhookError).status).toBe(401);
    }
    // The option only tightens the window: 300 seconds is the ceiling.
    const loose = new ShortcutWebhookClient(secret, {
      timestampToleranceMs: 3_600_000,
    });
    const over = await loose
      .verify(await signedRequest(observer, { timestamp: String(now - 301) }))
      .catch((caught: unknown) => caught);
    expect((over as ShortcutWebhookError).code).toBe('stale_timestamp');
    expect(
      (
        await client.verify(
          await signedRequest(observer, { timestamp: String(now - 200) }),
        )
      ).signatureScheme,
    ).toBe('shortcut-signature');
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
          deliveryId: sessionPrompted.id,
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
    vi.setSystemTime((now + 200) * 1000);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers, {
        timestampToleranceMs: 60_000,
      }),
    ).toEqual({ verified: false, reason: 'stale_timestamp' });
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
    // Map does, has no Shortcut-Signature.
    const bag = new Map(Object.entries(legacy));
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, bag),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
  });

  // Shortcut never sends a session event without Shortcut-Signature, so the
  // standalone check refuses one signed by Payload-Signature alone, as the
  // client does. Other bodies keep the fallback.
  it('verifyShortcutWebhookHeaders rejects a session event signed only by Payload-Signature', async () => {
    for (const body of [
      JSON.stringify(sessionPrompted),
      '{"type":"session.closed"}',
    ]) {
      const legacy = {
        'payload-signature': await signShortcutWebhookBody(secret, body),
      };
      expect(await verifyShortcutWebhookHeaders(secret, body, legacy)).toEqual({
        verified: false,
        reason: 'invalid_signature',
      });
      expect(
        await verifyShortcutWebhookHeaders(
          secret,
          body,
          await signShortcutWebhookHeaders(secret, body, {
            deliveryId: 'event-2',
          }),
        ),
      ).toEqual({
        verified: true,
        scheme: 'shortcut-signature',
        deliveryId: 'event-2',
      });
    }
    const observerBody = JSON.stringify(observer);
    expect(
      await verifyShortcutWebhookHeaders(secret, observerBody, {
        'payload-signature': await signShortcutWebhookBody(
          secret,
          observerBody,
        ),
      }),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
  });

  // An iterable header source is read the way a header record is: the exact
  // lowercase name first, then any other case, and an array's first value.
  // That covers a Map from another realm, which fails instanceof Map.
  it('reads iterable header sources the way it reads a header record', async () => {
    const body = '{"id":"evt_1"}';
    const signature =
      '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069';
    const verified = {
      verified: true,
      scheme: 'shortcut-signature',
      deliveryId: 'delivery-1',
    };
    const canonical: Array<[string, string]> = [
      ['Shortcut-Timestamp', '1700000000'],
      ['Shortcut-Delivery', 'delivery-1'],
      ['Shortcut-Signature', signature],
    ];
    const foreignMap = {
      get: (name: string) => canonical.find(([key]) => key === name)?.[1],
      [Symbol.iterator]: () => canonical[Symbol.iterator](),
    };
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, foreignMap),
    ).toEqual(verified);
    const arrays = new Map(
      canonical.map(([key, value]) => [key, [value, 'ignored']] as const),
    );
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, arrays),
    ).toEqual(verified);
    const duplicates = new Map([
      ...canonical.filter(([key]) => key !== 'Shortcut-Signature'),
      ['Shortcut-Signature', '0'.repeat(64)],
      ['shortcut-signature', signature],
    ]);
    const record = Object.fromEntries(duplicates);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, record),
    ).toEqual(verified);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, duplicates),
    ).toEqual(verified);
  });

  // A Map is a documented header source, and its get() matches case exactly,
  // so header names written the way HTTP prints them must still be found.
  it('reads header names from a Map without regard to case', async () => {
    const body = '{"id":"evt_1"}';
    const headers = new Map([
      ['Shortcut-Timestamp', '1700000000'],
      ['Shortcut-Delivery', 'delivery-1'],
      [
        'Shortcut-Signature',
        '5f25068c9b8163303be6cecda87dc52af76e53409f703e6fea054f23b2fb5069',
      ],
      [
        'Payload-Signature',
        'c0bd8e4de35355b11e7e98d53bb0d0122736ca05c58eb9c138a2dfa24725ac6d',
      ],
    ]);
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual({
      verified: true,
      scheme: 'shortcut-signature',
      deliveryId: 'delivery-1',
    });
    headers.set('Shortcut-Signature', '0'.repeat(64));
    expect(
      await verifyShortcutWebhookHeaders('test-secret', body, headers),
    ).toEqual({ verified: false, reason: 'invalid_signature' });
    expect(
      await verifyShortcutWebhookHeaders(
        'test-secret',
        body,
        new Map([['Payload-Signature', headers.get('Payload-Signature')]]),
      ),
    ).toEqual({ verified: true, scheme: 'payload-signature' });
  });
});
