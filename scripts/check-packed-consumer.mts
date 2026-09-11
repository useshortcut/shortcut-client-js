/** Verify the tarball with dependencies resolved as they are for a new consumer. */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const dir = mkdtempSync(join(tmpdir(), 'shortcut-packed-consumer-'));
try {
  const packed = JSON.parse(
    execFileSync(
      'npm',
      ['pack', '--ignore-scripts', '--json', '--pack-destination', dir],
      { encoding: 'utf8' },
    ),
  ) as { filename: string }[];
  writeFileSync(join(dir, 'package.json'), '{"private":true}\n');
  execFileSync(
    'npm',
    [
      'install',
      '--prefix',
      dir,
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      join(dir, packed[0].filename),
    ],
    { stdio: 'inherit' },
  );
  execFileSync(
    process.execPath,
    [
      resolve(import.meta.dirname, 'check-package-types.mts'),
      join(dir, 'node_modules/@shortcut/client'),
    ],
    { stdio: 'inherit' },
  );
} finally {
  rmSync(dir, { recursive: true, force: true });
}
