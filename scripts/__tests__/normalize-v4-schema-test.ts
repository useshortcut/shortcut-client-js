import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, it } from 'vitest';

it('normalizes response bodies by status, including shared and inline responses', () => {
  const dir = mkdtempSync(join(tmpdir(), 'shortcut-schema-'));
  const empty = { type: 'object', properties: {}, additionalProperties: false };
  const response = (name: string) => ({
    description: 'Response',
    content: {
      'application/json': { schema: { $ref: `#/components/schemas/${name}` } },
    },
  });
  const doc = {
    paths: {
      '/schema': {
        get: {
          operationId: 'getSchema',
          responses: {
            '200': { $ref: '#/components/responses/Shared' },
            '400': { $ref: '#/components/responses/Shared' },
            '422': response('DetailedError'),
          },
        },
      },
      '/story': {
        get: {
          operationId: 'getStory',
          responses: { '200': response('Response1') },
        },
        delete: {
          operationId: 'deleteStory',
          responses: {
            '204': { $ref: '#/components/responses/Shared' },
            '205': response('Empty'),
            '404': response('Empty'),
          },
        },
      },
    },
    components: {
      schemas: {
        Empty: empty,
        DetailedError: {
          type: 'object',
          properties: { code: { type: 'string' } },
        },
        Entity: { type: 'object', properties: { id: { type: 'number' } } },
        Response1: {
          type: 'object',
          properties: { schema: { $ref: '#/components/schemas/Entity' } },
        },
      },
      responses: { Shared: response('Empty') },
    },
  };
  try {
    const input = join(dir, 'input.json');
    const output = join(dir, 'output.json');
    writeFileSync(input, JSON.stringify(doc));
    execFileSync(process.execPath, [
      'scripts/normalize-v4-schema.mts',
      input,
      output,
    ]);
    const normalized = JSON.parse(readFileSync(output, 'utf8'));
    const resolve = (value: any) =>
      value.$ref
        ? normalized.components.responses[value.$ref.split('/').pop()]
        : value;
    const schema = (value: any) =>
      resolve(value).content['application/json'].schema;
    const get = normalized.paths['/schema'].get.responses;
    expect(schema(get['200'])).toEqual({
      ...empty,
      additionalProperties: true,
    });
    expect(schema(get['400'])).toEqual({
      $ref: '#/components/schemas/ApiError',
    });
    expect(schema(get['422'])).toEqual({
      $ref: '#/components/schemas/DetailedError',
    });
    const del = normalized.paths['/story'].delete.responses;
    expect(resolve(del['204'])).not.toHaveProperty('content');
    expect(resolve(del['205'])).not.toHaveProperty('content');
    expect(schema(del['404'])).toEqual({
      $ref: '#/components/schemas/ApiError',
    });
    expect(schema(normalized.paths['/story'].get.responses['200'])).toEqual({
      $ref: '#/components/schemas/Entity',
    });
    expect(normalized.components.schemas).not.toHaveProperty('Response1');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
