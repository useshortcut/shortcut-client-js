/**
 * Turns the `.d.cts` stubs that tsdown emits with `dts.cjsReexport` into
 * value re-exports.
 *
 * tsdown writes `export type * from './index.d.mts'`, which makes every
 * class and function type-only for CommonJS TypeScript consumers (TS1362:
 * "cannot be used as a value because it was exported using 'export type'").
 * A plain `export *` keeps one set of declarations for both module formats
 * and lets `require()` callers construct the clients.
 *
 * Usage: node scripts/fix-cjs-dts.mts <outDir>
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [outDir = 'lib'] = process.argv.slice(2);
let rewritten = 0;
for (const entry of readdirSync(outDir, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !entry.name.endsWith('.d.cts')) continue;
  const path = join(entry.parentPath, entry.name);
  const source = readFileSync(path, 'utf8');
  const fixed = source.replace(/^export type \* from/gm, 'export * from');
  if (fixed === source) continue;
  writeFileSync(path, fixed);
  rewritten += 1;
}
console.log(`rewrote ${rewritten} CommonJS declaration stub(s) in ${outDir}`);
