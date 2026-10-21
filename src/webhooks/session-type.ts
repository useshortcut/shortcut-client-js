/**
 * The one test of what counts as a session event. Classification in
 * `types.ts` and the Payload-Signature refusal in `verify.ts` both use it,
 * so they cannot drift apart. Not exported from the package.
 */
export const isSessionEventType = (
  type: unknown,
): type is `session.${string}` =>
  typeof type === 'string' && type.startsWith('session.');
