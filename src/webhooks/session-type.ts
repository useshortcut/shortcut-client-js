/** Shared by `types.ts` and `verify.ts` so they agree on what a session event is. */
export const isSessionEventType = (
  type: unknown,
): type is `session.${string}` =>
  typeof type === 'string' && type.startsWith('session.');
