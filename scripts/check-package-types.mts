/** Compile real consumers of the built entrypoints; run after `yarn build`. */
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import ts from 'typescript';

const packageRoot = resolve(process.argv[2] ?? '.');
const dir = mkdtempSync(join(tmpdir(), 'shortcut-consumer-'));
const source = `
import ShortcutClient, { ShortcutClient as NamedV3 } from '@shortcut/client';
import ShortcutV4Client, { ShortcutV4Client as NamedV4 } from '@shortcut/client/v4';
import { ShortcutWebhookClient } from '@shortcut/client/webhooks';
const legacy: ShortcutClient = new ShortcutClient('token');
new NamedV3('token');
new NamedV4({ token: 'token' });
new ShortcutWebhookClient('secret');
const client: ShortcutV4Client = new ShortcutV4Client({ token: 'token' });
const workspace = client.workspace('acme');
workspace.getWhoami();
workspace.getSchema('story');
workspace.getStory(1);
workspace.setSecurityData('rotated');
workspace.setSecurityData(null);
workspace.abortRequest(Symbol('request'));
// @ts-expect-error Security data is required, even on a workspace facade.
workspace.setSecurityData();
// @ts-expect-error A cancellation token is required.
workspace.abortRequest();
// @ts-expect-error A schema name is required.
workspace.getSchema();
// @ts-expect-error The workspace slug has already been bound.
workspace.getStory('acme', 1);
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type Deleted = Assert<Equal<Awaited<ReturnType<typeof workspace.deleteStory>>, void>>;
type Schema = Assert<Equal<Awaited<ReturnType<typeof workspace.getSchema>>, Record<string, any>>>;
`;
try {
  mkdirSync(join(dir, 'node_modules/@shortcut'), { recursive: true });
  symlinkSync(packageRoot, join(dir, 'node_modules/@shortcut/client'), 'dir');
  const modes = [
    [
      'node10 CJS',
      '.cts',
      ts.ModuleKind.CommonJS,
      ts.ModuleResolutionKind.Node10,
    ],
    [
      'node10 ESM',
      '.mts',
      ts.ModuleKind.ESNext,
      ts.ModuleResolutionKind.Node10,
    ],
    [
      'node16 CJS',
      '.cts',
      ts.ModuleKind.Node16,
      ts.ModuleResolutionKind.Node16,
    ],
    [
      'node16 ESM',
      '.mts',
      ts.ModuleKind.Node16,
      ts.ModuleResolutionKind.Node16,
    ],
    [
      'nodenext CJS',
      '.cts',
      ts.ModuleKind.NodeNext,
      ts.ModuleResolutionKind.NodeNext,
    ],
    [
      'nodenext ESM',
      '.mts',
      ts.ModuleKind.NodeNext,
      ts.ModuleResolutionKind.NodeNext,
    ],
    ['bundler', '.mts', ts.ModuleKind.ESNext, ts.ModuleResolutionKind.Bundler],
  ] as const;
  for (const [label, extension, module, moduleResolution] of modes) {
    const file = join(dir, `consumer${extension}`);
    writeFileSync(file, source);
    const program = ts.createProgram([file], {
      module,
      moduleResolution,
      target: ts.ScriptTarget.ES2022,
      noEmit: true,
      strict: true,
      esModuleInterop: true,
      types: ['node'],
      typeRoots: [resolve(import.meta.dirname, '../node_modules/@types')],
      ignoreDeprecations: '6.0',
    });
    const diagnostics = ts.getPreEmitDiagnostics(program);
    if (diagnostics.length) {
      throw new Error(
        `${label}:\n${ts.formatDiagnosticsWithColorAndContext(diagnostics, {
          getCanonicalFileName: (name) => name,
          getCurrentDirectory: () => dir,
          getNewLine: () => '\n',
        })}`,
      );
    }
    console.log(`Consumer types pass: ${label}`);
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
