import { defineConfig } from 'tsup';
import { globSync } from 'glob';

export default defineConfig({
  // Find all TypeScript files (excluding tests and type definitions)
  entry: globSync('src/**/*.ts', {
    ignore: ['src/**/__tests__/**', 'src/**/*.test.ts', 'src/**/*.d.ts'],
  }),
  outDir: 'lib',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false, // Disable code splitting to maintain file structure
});
