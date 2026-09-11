/**
 * Shares the fetch-based entrypoints' declarations across CommonJS and ESM.
 *
 * tsdown's cjsReexport emits ESM declarations and type-only CommonJS stubs.
 * Value re-exports from those stubs fail under TypeScript's node16 mode, and
 * `export *` loses default exports. Store the shared declarations as CommonJS
 * instead, with small ESM entrypoint wrappers that explicitly alias the named
 * default client. This avoids duplicating the generated contracts and docs.
 *
 * V3 must retain separate graphs: Axios exports different ESM and CommonJS
 * types, and sharing the CommonJS graph breaks ESM consumers' AxiosInstance
 * assignments with newer Axios versions allowed by our dependency range.
 *
 * Usage: node scripts/fix-cjs-dts.mts <outDir>
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { join, relative, sep } from 'node:path';

const [outDir = 'lib'] = process.argv.slice(2);
const wrapperComment = '// ESM wrapper for the shared CommonJS declarations.\n';
let rewritten = 0;
for (const entry of readdirSync(outDir, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !entry.name.endsWith('.d.mts')) continue;
  const path = join(entry.parentPath, entry.name);
  const source = readFileSync(path, 'utf8');
  if (source.startsWith(wrapperComment)) continue;
  const cjsPath = path.replace(/\.d\.mts$/, '.d.cts');
  // Only the public entrypoints have a CommonJS stub before this conversion.
  const isEntrypoint = existsSync(cjsPath);
  const shared = source.replace(/\.mjs(["'])/g, '.cjs$1');
  writeFileSync(cjsPath, shared);
  const entrypoint = relative(outDir, path).split(sep)[0];
  if (entrypoint !== 'v4' && entrypoint !== 'webhooks') {
    // Keep the original ESM declarations so Axios resolves in import mode.
    rewritten += 1;
    continue;
  }
  if (isEntrypoint) {
    const target = `./${entry.name.replace(/\.d\.mts$/, '.cjs')}`;
    const defaultName = source.match(/\b(\w+)\s+as\s+default\b/)?.[1];
    if (/\bexport\s+default\b/.test(source)) {
      throw new Error(`Expected a named default export in ${path}`);
    }
    writeFileSync(
      path,
      `${wrapperComment}export * from '${target}';\n${
        defaultName
          ? `export { ${defaultName} as default } from '${target}';\n`
          : ''
      }`,
    );
  } else {
    unlinkSync(path);
  }
  rewritten += 1;
}
console.log(`prepared ${rewritten} declaration file(s) for CommonJS and ESM`);
