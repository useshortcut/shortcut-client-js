/** Compile real consumers of the built entrypoints; run after `yarn build`. */
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const packageRoot = resolve(process.argv[2] ?? '.');
const dir = mkdtempSync(join(tmpdir(), 'shortcut-consumer-'));
const source = `
import ShortcutClient, { ShortcutClient as NamedV3 } from '@shortcut/client';
import ShortcutV4Client, { ShortcutV4Client as NamedV4 } from '@shortcut/client/v4';
import type { ShortcutWorkspaceApi, WorkspaceOperation } from '@shortcut/client/v4';
import { ShortcutWebhookClient } from '@shortcut/client/webhooks';
import axios, { type AxiosInstance } from 'axios';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
const legacy: ShortcutClient = new ShortcutClient('token');
legacy.instance = axios.create();
const instance: AxiosInstance = legacy.instance;
new NamedV3('token');
new NamedV4({ token: 'token' });
const webhooks = new ShortcutWebhookClient('secret');
const handler = webhooks.createHandler();
// Node's real request and response types must satisfy the structural
// \`ShortcutNodeRequest\` / \`ShortcutNodeResponse\` overload.
createServer(handler);
const nodeResult: Promise<void> = handler({} as IncomingMessage, {} as ServerResponse);
const fetchResult: Promise<Response> = handler(new Request('https://x'));
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
// The facade type is keyed on the generated operation list: bound members
// drop the slug, everything else keeps the client's signature.
type Bound = Assert<Equal<Parameters<ShortcutWorkspaceApi['getStory']>[0], number>>;
type BoundSlug = Assert<Equal<Parameters<ShortcutV4Client['getStory']>[0], string>>;
type Unbound = Assert<Equal<ShortcutWorkspaceApi['getSchema'], ShortcutV4Client['getSchema']>>;
type Utility = Assert<Equal<ShortcutWorkspaceApi['setSecurityData'], ShortcutV4Client['setSecurityData']>>;
type Known = Assert<Equal<Exclude<WorkspaceOperation, keyof ShortcutV4Client>, never>>;
type Slugless = Assert<Equal<Exclude<'getWhoami' | 'getSchema', WorkspaceOperation>, 'getWhoami' | 'getSchema'>>;
`;
// A Workers-style project: no Node types at all, only the DOM's Fetch API.
// The webhooks declarations must not reach for `node:http`.
const workersSource = `
import { ShortcutV4Client } from '@shortcut/client/v4';
import { ShortcutWebhookClient } from '@shortcut/client/webhooks';
const client = new ShortcutV4Client({ token: 'token' });
client.workspace('acme').getWhoami();
const webhooks = new ShortcutWebhookClient('s');
const handler = webhooks.createHandler();
handler.on('mentioned', async () => {});
const response: Promise<Response> = handler(new Request('https://x'));
webhooks.verify(new Request('https://x'));
export default { fetch: handler };
`;
try {
  mkdirSync(join(dir, 'node_modules/@shortcut'), { recursive: true });
  symlinkSync(packageRoot, join(dir, 'node_modules/@shortcut/client'), 'dir');
  // Use the consumer's Axios version, including a fresh install's newer
  // allowed version, rather than implicitly testing only our lockfile.
  const require = createRequire(join(packageRoot, 'package.json'));
  symlinkSync(
    dirname(require.resolve('axios/package.json')),
    join(dir, 'node_modules/axios'),
    'dir',
  );
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
  {
    const file = join(dir, 'worker.mts');
    writeFileSync(file, workersSource);
    const program = ts.createProgram([file], {
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      target: ts.ScriptTarget.ES2022,
      lib: ['lib.es2022.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
      noEmit: true,
      strict: true,
      esModuleInterop: true,
      types: [],
      typeRoots: [resolve(import.meta.dirname, '../node_modules/@types')],
      ignoreDeprecations: '6.0',
    });
    const diagnostics = ts.getPreEmitDiagnostics(program);
    if (diagnostics.length) {
      throw new Error(
        `workers (no Node types):\n${ts.formatDiagnosticsWithColorAndContext(
          diagnostics,
          {
            getCanonicalFileName: (name) => name,
            getCurrentDirectory: () => dir,
            getNewLine: () => '\n',
          },
        )}`,
      );
    }
    console.log('Consumer types pass: workers (no Node types)');
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
