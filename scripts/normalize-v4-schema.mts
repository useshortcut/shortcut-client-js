/**
 * Rewrites the published v4 OpenAPI document into a shape that generates
 * readable TypeScript.
 *
 * The published document names every response and request body by a numeric
 * id (`Response1631704`, `Body1631589`) and wraps each success schema in an
 * object with a single `schema` property. This script:
 *
 * - points each success response straight at the wrapped schema
 *   (`StoryEntityWrapper`) and drops the numeric wrapper;
 * - collapses the empty error-response schemas into one shared `ApiError`;
 * - renames each request body after its operation
 *   (`Body1631589` -> `CreateStoryCommentParams`) and inlines it into the
 *   operation so the generator preserves its media type.
 *
 * Usage: node scripts/normalize-v4-schema.mts <input.json> <output.json>
 */
import { readFileSync, writeFileSync } from 'node:fs';

type Json = Record<string, any>;

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: normalize-v4-schema.mts <input.json> <output.json>');
  process.exit(2);
}

const doc: Json = JSON.parse(readFileSync(input, 'utf8'));
const schemas: Json = doc.components.schemas;
const responses: Json = doc.components.responses ?? {};
const requestBodies: Json = doc.components.requestBodies ?? {};
const refName = (ref: string) => ref.split('/').pop() as string;
const pascal = (id: string) =>
  id.replace(/(^|[^a-zA-Z0-9])([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const renames = new Map<string, string>();
const suffixed: string[] = [];
let inlined = 0;

// 1. Success responses: unwrap `{ schema: $ref }`; errors: share one schema.
schemas.ApiError = {
  type: 'object',
  description: 'Error response body.',
  properties: {
    message: {
      type: 'string',
      description: 'Human-readable description of the error.',
    },
    tag: { type: 'string', description: 'Machine-readable error tag.' },
    errors: {
      type: 'object',
      additionalProperties: true,
      description: 'Field-level details, when present.',
    },
  },
  required: ['message'],
  additionalProperties: true,
};
// Resolve from an immutable copy: a component can be shared by success and
// error status codes, which must not overwrite each other's response shapes.
const originalResponses = structuredClone(responses);
const normalizedResponses = new Set<string>();
const replacedSchemas = new Set<string>();
for (const pathItem of Object.values<Json>(doc.paths)) {
  for (const operation of Object.values<Json>(pathItem)) {
    for (const [status, reference] of Object.entries<Json>(
      operation?.responses ?? {},
    )) {
      const name = reference.$ref ? refName(reference.$ref) : undefined;
      const response = structuredClone(
        name ? originalResponses[name] : reference,
      ) as Json;
      if (!response) continue;
      const content = response.content?.['application/json'];
      const ref = content?.schema?.$ref;
      const schema = ref ? schemas[refName(ref)] : content?.schema;
      const props = schema?.properties ?? {};
      const keys = Object.keys(props);
      if (status === '204' || status === '205') {
        delete response.content;
      } else if (
        keys.length === 1 &&
        keys[0] === 'schema' &&
        props.schema.$ref
      ) {
        content.schema = { $ref: props.schema.$ref };
      } else if (
        schema?.type === 'object' &&
        keys.length === 0 &&
        !schema.additionalProperties
      ) {
        if (/^[45](?:\d{2}|XX)$/i.test(status) || status === 'default') {
          content.schema = { $ref: '#/components/schemas/ApiError' };
        } else if (/^2(?:\d{2}|XX)$/i.test(status)) {
          // The published empty success placeholder describes an arbitrary
          // JSON object (getSchema), not an error or an object with no keys.
          content.schema = { ...schema, additionalProperties: true };
        }
      }
      if (
        ref &&
        (response.content === undefined || content.schema.$ref !== ref)
      )
        replacedSchemas.add(refName(ref));
      if (name) {
        let target = name;
        if (
          normalizedResponses.has(name) &&
          JSON.stringify(responses[name]) !== JSON.stringify(response)
        ) {
          target = `${name}Status${status}`;
        }
        responses[target] = response;
        normalizedResponses.add(target);
        // The generator treats a bodyless response $ref as `any`; an inline
        // response with no content correctly produces `void`.
        operation.responses[status] =
          response.content === undefined
            ? response
            : { $ref: `#/components/responses/${target}` };
      } else {
        operation.responses[status] = response;
      }
    }
  }
}
// 1b. Responses: the published document numbers them (`Response1631606`) and
// renumbers on every release, which churns thousands of lines of this file
// for no change in meaning. Name each distinct response by its content, merge
// duplicates, and point operations at the merged name. The generator never
// uses these names, so this only keeps the checked-in document stable.
const responseKey = (response: Json) =>
  JSON.stringify({
    description: response.description ?? '',
    content: response.content ?? null,
    headers: response.headers ?? null,
  });
const responseBaseName = (response: Json): string => {
  const schema = response.content?.['application/json']?.schema;
  const description = pascal(
    String(response.description ?? '').replace(/[^A-Za-z0-9 ]/g, ' '),
  );
  if (!response.content) return description || 'NoContent';
  if (schema?.$ref) {
    const name = refName(schema.$ref);
    return name === 'ApiError' ? description || 'ApiError' : name;
  }
  return description || 'Body';
};
const byKey = new Map<string, { response: Json; names: string[] }>();
for (const [name, response] of Object.entries<Json>(responses)) {
  const key = responseKey(response);
  const group = byKey.get(key) ?? { response, names: [] };
  group.names.push(name);
  byKey.set(key, group);
}
const responseRenames = new Map<string, string>();
const takenResponseNames = new Set<string>();
const mergedResponses: Json = {};
for (const [key, group] of [...byKey].sort(([a], [b]) => a.localeCompare(b))) {
  const base = `${responseBaseName(group.response)}Response`;
  let target = base;
  for (let n = 2; takenResponseNames.has(target); n += 1) target = `${base}${n}`;
  takenResponseNames.add(target);
  mergedResponses[target] = group.response;
  for (const name of group.names) responseRenames.set(name, target);
}
for (const pathItem of Object.values<Json>(doc.paths)) {
  for (const operation of Object.values<Json>(pathItem)) {
    for (const response of Object.values<Json>(operation?.responses ?? {})) {
      const ref = response?.$ref;
      if (typeof ref !== 'string' || !ref.startsWith('#/components/responses/'))
        continue;
      const target = responseRenames.get(refName(ref));
      if (target) response.$ref = `#/components/responses/${target}`;
    }
  }
}
for (const name of Object.keys(responses)) delete responses[name];
Object.assign(responses, mergedResponses);

// Keep schemas still referenced elsewhere, including a component shared with
// a successful response. Only remove wrappers made obsolete above.
const referencedSchemas = new Set<string>();
const collectRefs = (node: unknown): void => {
  if (!node || typeof node !== 'object') return;
  for (const [key, value] of Object.entries(node)) {
    if (
      key === '$ref' &&
      typeof value === 'string' &&
      value.startsWith('#/components/schemas/')
    )
      referencedSchemas.add(refName(value));
    else collectRefs(value);
  }
};
collectRefs(doc);
for (const name of replacedSchemas) {
  if (!referencedSchemas.has(name)) delete schemas[name];
}

// 2. Request bodies: name after the operation that uses them.
for (const pathItem of Object.values<Json>(doc.paths)) {
  for (const operation of Object.values<Json>(pathItem)) {
    const ref = operation?.requestBody?.$ref;
    if (!ref || !operation.operationId) continue;
    const oldName = refName(ref);
    const newName = `${pascal(operation.operationId)}Params`;
    const body = requestBodies[oldName];
    const mediaType =
      body?.content &&
      (body.content['application/json'] ?? Object.values(body.content)[0]);
    const schemaRef = (mediaType as Json | undefined)?.schema?.$ref;
    if (!body || !schemaRef || renames.has(oldName)) continue;
    const oldSchema = refName(schemaRef);
    // The document often already has a named copy of the body schema. Reuse it
    // when identical; otherwise keep both apart with a `Body` suffix.
    let target = newName;
    if (
      schemas[newName] &&
      newName !== oldSchema &&
      JSON.stringify(schemas[newName]) !== JSON.stringify(schemas[oldSchema])
    ) {
      target = `${pascal(operation.operationId)}Body`;
      if (schemas[target])
        throw new Error(`Cannot rename ${oldSchema}: ${target} already exists`);
    }
    if (target !== oldSchema) {
      if (!schemas[target]) schemas[target] = schemas[oldSchema];
      delete schemas[oldSchema];
    }
    (mediaType as Json).schema = { $ref: `#/components/schemas/${target}` };
    // Inline the body so the generator sees its media type. A `$ref` into
    // `components/requestBodies` is not resolved by swagger-typescript-api,
    // which then emits no `type` and the client sends JSON as text/plain and
    // multipart uploads as JSON.
    operation.requestBody = body;
    delete requestBodies[oldName];
    inlined += 1;
    renames.set(oldName, target);
    renames.set(oldSchema, target);
    if (target !== newName) suffixed.push(target);
  }
}
if (Object.keys(requestBodies).length === 0)
  delete doc.components.requestBodies;

// 3. Nested numerically named schemas (position anchors inside bodies): merge
// identical shapes and name them by their descriptive suffix.
const groups = new Map<string, string[]>();
for (const name of Object.keys(schemas)) {
  if (!/^(Body|Response)\d+/.test(name)) continue;
  const shape = JSON.stringify(schemas[name]);
  groups.set(shape, [...(groups.get(shape) ?? []), name]);
}
// Name each shape from its own content, not from the order the document
// lists it in: the published document reorders between releases, and a
// first-come claim on a short name like `SetPosition` would flip which
// entity owns it from one sync to the next.
const claimed = new Set(Object.keys(schemas));
const entityOf = (props: string[]): string | undefined => {
  const anchor = props.find((prop) => /^anchor_.+_id$/.test(prop));
  return anchor ? pascal(anchor.replace(/^anchor_|_id$/g, '')) : undefined;
};
const sortedGroups = [...groups].sort(([a], [b]) => a.localeCompare(b));
for (const [shape, names] of sortedGroups) {
  const suffixes = names
    .map((name) => name.replace(/^(Body|Response)\d+/, ''))
    .filter(Boolean);
  const props = Object.keys(JSON.parse(shape).properties ?? {});
  const shortest =
    suffixes.sort((a, b) => a.length - b.length || a.localeCompare(b))[0] ??
    `${pascal(props.join('_'))}Body`;
  const entity = entityOf(props);
  let target =
    entity && !shortest.startsWith(entity) ? `${entity}${shortest}` : shortest;
  if (claimed.has(target)) {
    const distinguishing =
      props.find((prop) => prop !== 'position') ?? props[0] ?? 'Value';
    target = `${pascal(distinguishing.replace(/^anchor_|_id$/g, ''))}${target}`;
  }
  if (claimed.has(target))
    throw new Error(
      `Cannot name nested schema ${names[0]}: ${target} already exists`,
    );
  claimed.add(target);
  schemas[target] = JSON.parse(shape);
  for (const name of names) {
    delete schemas[name];
    renames.set(name, target);
  }
}

// 4. Any remaining references to renamed schemas.
const rewrite = (node: unknown): void => {
  if (Array.isArray(node)) return node.forEach(rewrite);
  if (!node || typeof node !== 'object') return;
  for (const [key, value] of Object.entries(node as Json)) {
    if (
      key === '$ref' &&
      typeof value === 'string' &&
      value.startsWith('#/components/schemas/')
    ) {
      const target = renames.get(refName(value));
      if (target) (node as Json)[key] = `#/components/schemas/${target}`;
    } else rewrite(value);
  }
};
rewrite(doc);

writeFileSync(output, `${JSON.stringify(doc, null, 2)}\n`);
console.log(
  `normalized ${input} -> ${output}: ${inlined} request bodies named after operations (${suffixed.length} kept apart with a Body suffix), ${groups.size} nested shapes merged, ${Object.keys(schemas).length} schemas`,
);
