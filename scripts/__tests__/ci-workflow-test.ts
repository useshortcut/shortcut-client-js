import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';

const FIX =
  'CI runs checks only as `yarn verify:<name>` jobs built from package.json. ' +
  'Add a `verify:<name>` script to package.json instead of editing .github/workflows/ci.yml, ' +
  'so `yarn verify` runs the new check locally too.';

it('runs every CI check through a verify:<name> script', () => {
  const workflow = readFileSync(
    new URL('../../.github/workflows/ci.yml', import.meta.url),
    'utf8',
  );
  const commands = [...workflow.matchAll(/^\s*(?:- )?run:\s*(.*)$/gm)].map(
    (match) => match[1],
  );

  expect(commands, FIX).toEqual([
    'echo "names=$(node scripts/verify.mts --list)" >> "$GITHUB_OUTPUT"',
    'corepack enable',
    'yarn install --immutable',
    'yarn verify:${{ matrix.name }}',
  ]);
  expect(workflow, FIX).toContain(
    'name: ${{ fromJSON(needs.list.outputs.names) }}',
  );
});
