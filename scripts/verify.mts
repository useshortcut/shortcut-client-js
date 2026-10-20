/**
 * Run every `verify:<name>` script in package.json, the same list CI runs as
 * one job per name. `--list` prints the names as JSON for the CI matrix.
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const PREFIX = 'verify:';

const { scripts } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as { scripts: Record<string, string> };
const names = Object.keys(scripts)
  .filter((script) => script.startsWith(PREFIX))
  .map((script) => script.slice(PREFIX.length));

if (process.argv[2] === '--list') {
  console.log(JSON.stringify(names));
  process.exit(0);
}

const yarn = (args: string[]) =>
  spawnSync('yarn', args, { stdio: 'inherit' }).status === 0;

if (!yarn(['install', '--immutable'])) {
  console.error('\nverify: yarn install --immutable failed');
  process.exit(1);
}

const failed: string[] = [];
for (const name of names) {
  console.log(`\n=== verify:${name} ===`);
  if (!yarn(['run', `${PREFIX}${name}`])) failed.push(name);
}

console.log(
  `\nverify: ${names.length - failed.length}/${names.length} passed` +
    (failed.length > 0 ? `; failed: ${failed.join(', ')}` : ''),
);
process.exit(failed.length > 0 ? 1 : 0);
