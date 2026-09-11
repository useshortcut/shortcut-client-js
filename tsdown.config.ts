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
  // Emit one declaration graph. scripts/fix-cjs-dts.mts moves it to CommonJS
  // and creates ESM wrappers, preserving defaults and node16 compatibility.
  // V3 keeps both graphs to preserve Axios's format-specific type identities.
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
