import { defineConfig } from 'tsdown';

export default defineConfig({
  // Find all TypeScript files (excluding tests and type definitions)
  entry: {
    index: 'src/index.ts',
    'v4/index': 'src/v4/index.ts',
    'webhooks/index': 'src/webhooks/index.ts',
  },
  outDir: 'lib',
  format: ['esm', 'cjs'],
  // One set of declarations for both formats. tsdown writes the CJS stubs as
  // `export type *`, which scripts/fix-cjs-dts.mts turns into value re-exports.
  dts: { cjsReexport: true },
  clean: true,
  unbundle: true,
  exports: {
    // I'm not sure why, but the package.json file is being included in the exports.
    // We don't want that, so we remove it.
    customExports(pkg) {
      // eslint-disable-next-line no-param-reassign
      delete pkg['./package.json'];
      return pkg;
    },
  },
  outputOptions: {
    exports: 'named',
  },
});
