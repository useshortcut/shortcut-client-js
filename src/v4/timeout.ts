export const DEFAULT_TIMEOUT_MS = 30_000;

/** Returns `timeoutMs` (defaulting when undefined) or throws for anything but a positive number or `Infinity`. */
export function resolveTimeoutMs(timeoutMs: unknown, owner: string): number {
  if (timeoutMs === undefined) return DEFAULT_TIMEOUT_MS;
  if (
    typeof timeoutMs !== 'number' ||
    Number.isNaN(timeoutMs) ||
    timeoutMs <= 0
  ) {
    throw new TypeError(
      `${owner} timeoutMs must be a positive number of milliseconds or Infinity`,
    );
  }
  return timeoutMs;
}

/** The abort reason for a timed-out request: a `TimeoutError`, as `AbortSignal.timeout` produces. */
export function timeoutError(timeoutMs: number): Error {
  const message = `Shortcut request timed out after ${timeoutMs} ms`;
  if (typeof DOMException === 'function') {
    return new DOMException(message, 'TimeoutError');
  }
  const error = new Error(message);
  error.name = 'TimeoutError';
  return error;
}

/**
 * Runs `run` with a signal that aborts when `signal` aborts or once
 * `timeoutMs` elapses, whichever comes first. The timer is cleared as soon
 * as `run` settles, so a request that completes in time leaves nothing
 * pending. With an infinite timeout `run` receives `signal` as is.
 */
export async function withTimeout<T>(
  timeoutMs: number,
  signal: AbortSignal | null | undefined,
  run: (signal: AbortSignal | undefined) => Promise<T>,
): Promise<T> {
  if (!Number.isFinite(timeoutMs)) return run(signal ?? undefined);
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(timeoutError(timeoutMs)),
    timeoutMs,
  );
  const combined = combineSignals(signal, controller.signal);
  try {
    const result = await run(combined.signal);
    // A fetch implementation may resolve a body read that the timeout
    // interrupted, so a fired timer always surfaces as a rejection.
    if (controller.signal.aborted) throw controller.signal.reason;
    return result;
  } finally {
    clearTimeout(timer);
    combined.release();
  }
}

/** A signal that aborts, with the same reason, when either input aborts. */
function combineSignals(
  first: AbortSignal | null | undefined,
  second: AbortSignal,
): { signal: AbortSignal; release: () => void } {
  if (!first) return { signal: second, release: () => {} };
  if (typeof AbortSignal.any === 'function') {
    return { signal: AbortSignal.any([first, second]), release: () => {} };
  }
  const controller = new AbortController();
  const subscriptions = [first, second].map((source) => {
    const listener = () => controller.abort(source.reason);
    if (source.aborted) listener();
    else source.addEventListener('abort', listener, { once: true });
    return () => source.removeEventListener('abort', listener);
  });
  return {
    signal: controller.signal,
    release: () => subscriptions.forEach((unsubscribe) => unsubscribe()),
  };
}
