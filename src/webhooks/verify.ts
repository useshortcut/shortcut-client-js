/** Header carrying the hex HMAC-SHA256 digest of the raw request body. */
export const SHORTCUT_WEBHOOK_SIGNATURE_HEADER = 'payload-signature';

const encoder = new TextEncoder();

function parseSignature(
  value: string | null | undefined,
): Uint8Array | undefined {
  if (!value || !/^[0-9a-fA-F]{64}$/.test(value)) return undefined;
  const bytes = new Uint8Array(32);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

/**
 * Copies exactly the view's bytes into a fresh `ArrayBuffer`. `bytes.slice()`
 * is not enough: Node's `Buffer.prototype.slice` is an alias of `subarray`,
 * so for a pooled `Buffer` (`Buffer.from('short text')`, `http` request
 * chunks) `.buffer` would be the whole 8 KiB pool. Copying also detaches the
 * bytes from any `SharedArrayBuffer`, which WebCrypto rejects.
 */
function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

/**
 * Verifies a Shortcut webhook signature in constant time using WebCrypto,
 * which is available on Node.js 20+, Cloudflare Workers, Deno, and Bun.
 *
 * @param secret The agent app's webhook signing secret.
 * @param rawBody The exact request bytes. Passing a re-serialized string only
 *   works when it matches the original bytes, so prefer the raw body.
 * @param signature The `Payload-Signature` header value.
 * @returns `false` for a missing, malformed, or mismatched signature.
 */
export async function verifyShortcutWebhookSignature(
  secret: string,
  rawBody: Uint8Array | string,
  signature: string | null | undefined,
): Promise<boolean> {
  if (typeof secret !== 'string' || secret.length === 0) return false;
  const expected = parseSignature(signature);
  if (!expected) return false;
  const body = typeof rawBody === 'string' ? encoder.encode(rawBody) : rawBody;
  const key = await crypto.subtle.importKey(
    'raw',
    toArrayBuffer(encoder.encode(secret)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  return crypto.subtle.verify(
    'HMAC',
    key,
    toArrayBuffer(expected),
    toArrayBuffer(body),
  );
}

/**
 * Computes the `Payload-Signature` value for a body. Useful for signing test
 * deliveries against a local agent.
 */
export async function signShortcutWebhookBody(
  secret: string,
  rawBody: Uint8Array | string,
): Promise<string> {
  const body = typeof rawBody === 'string' ? encoder.encode(rawBody) : rawBody;
  const key = await crypto.subtle.importKey(
    'raw',
    toArrayBuffer(encoder.encode(secret)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign('HMAC', key, toArrayBuffer(body)),
  );
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join(
    '',
  );
}
