# @shortcut/client

<img height="125" src="https://github.com/user-attachments/assets/7c3d3b8e-6252-4790-81cd-6640cd46a2d6" alt="Shortcut's logo" align="right">

[![Version](https://badge.fury.io/js/@shortcut%2Fclient.svg)](https://badge.fury.io/js/@shortcut%2Fclient)
[![Monthly Downloads](https://img.shields.io/npm/dm/@shortcut%2Fclient)](https://www.npmjs.org/package/@shortcut%2Fclient)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/useshortcut/shortcut-client-js/blob/main/LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
[![X](https://img.shields.io/twitter/follow/shortcut.svg?label=Follow%20@shortcut)](https://twitter.com/intent/follow?screen_name=shortcut)

A library for interacting with the Shortcut REST API.

<br />

## Getting Started

### Installation

```shell
npm install @shortcut/client
```

> [!IMPORTANT]
> Our legacy npm organization namespace is `@useshortcut`.
>
> While it will still contain copies of all future released package versions, we **strongly** recommend switching to our primary `@shortcut` organization namespace.

### How to Get an API Token

The Shortcut API uses token-based authentication, you will need one to use this library.

To generate an API token, go to https://app.shortcut.com/settings/account/api-tokens.

To make it easier to explore our API, we recommend saving this token as an environment variable in your local dev environment:

```bash
export SHORTCUT_API_TOKEN="YOUR API TOKEN HERE"
```

This will allow you to copy and paste many examples in the documentation to try them out.

> [!NOTE]
> Requests made with a missing or invalid token will get a `401 Unauthorized` response.

> [!NOTE]
> All requests must be made over HTTPS.

> [!CAUTION]
> Tokens provide complete access to your Shortcut account, **so keep them secure**.
>
> Don’t paste them into your source code, use an environment variable instead.
>
> For security reasons, we will immediately invalidate any tokens we find have been made public.

## Usage

To see all available exports, take a look at the [API documentation](https://useshortcut.github.io/shortcut-client-js/) or check out the `.d.ts` files in this repository.

```javascript
import { ShortcutClient } from '@shortcut/client';
// const { ShortcutClient } = require('@shortcut/client');

const shortcut = new ShortcutClient('YOUR_API_TOKEN'); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

shortcut.getCurrentMemberInfo().then((response) => console.log(response?.data));

shortcut.listProjects().then((response) => console.log(response?.data));
```

## API v4 and Custom Agents

Two additional entrypoints cover the [REST API v4](https://developer.shortcut.com/api/rest/v4) and the webhooks that [Custom Agents](https://developer.shortcut.com/api/rest/v4) receive. Both use the Fetch API, so they run on Node.js 20+, Cloudflare Workers, Deno, and Bun.

v3 and v4 ship together in this package because v4 does not yet cover every v3 endpoint, and agents need both from one install. Each entrypoint is independent, so an application that imports only one never bundles the other. Once v4 reaches parity, the next major version will drop the v3 entrypoint.

### `@shortcut/client/v4`

v4 is workspace-scoped: every operation takes the workspace slug first, and `workspace(slug)` binds it once. The generated operations URL-encode their path parameters (the slug, member ids, external ids, ...), so pass raw values. Requests that fail reject with the `Response`, whose `error` carries the parsed body, the raw text when the body is not JSON, or `null` when it is empty, and whose `request` names the method and URL pathname (never the query) that produced it. `summarizeShortcutV4Error(error)` reduces a rejection to method, path, status, and the body's identifier-shaped `tag` and `error` codes, which is safe to log without echoing user content, cursors, or credentials. Lists page by cursor; `paginate()` follows `next_page_url` and only sends the token back to the same API origin. Every request, including refresh waits, retries, and reading its body, is aborted with a `TimeoutError` after `timeoutMs` (30 s by default; `Infinity` disables it), which composes with a per-request `signal` or `cancelToken`.

```ts
import {
  ShortcutV4Client,
  isShortcutV4RequestError,
  summarizeShortcutV4Error,
} from '@shortcut/client/v4';

const client = new ShortcutV4Client({ token: process.env.SHORTCUT_TOKEN });
const acme = client.workspace('acme');

const { entity: story } = await acme.getStory(123, {
  fields: 'name,team,workflow_state',
});

for await (const comment of client.paginate(
  acme.listStoryComments(123, { fields: 'id,author,deleted', limit: 100 }),
)) {
  console.log(comment.id);
}

try {
  await acme.createStoryComment(
    123,
    { text: 'Hello from an agent' },
    { fields: 'id' },
  );
} catch (error) {
  // e.g. { method: 'POST', path: '/api/v4/acme/stories/123/comments', status: 422, tag: 'invalid_params' }
  console.error(summarizeShortcutV4Error(error));
  if (isShortcutV4RequestError(error) && error.status === 404) {
    // error.error is the parsed body, the raw text, or null
  }
}
```

Agent apps authenticate with OAuth per workspace. `ShortcutOAuth` completes the authorization-code exchange and refreshes tokens; the response's `permission_id` is the agent's own member id, which deliveries report as `actor.member_id` for changes the agent made. A refresh response may omit the workspace fields; pass the previous tokens to `refreshAccessToken` and it resolves the merged result, keeping them and `scope` when omitted (`applyRefresh` does the merge on its own). Token requests share the same `timeoutMs` option (30 s by default, `Infinity` disables it, and it covers reading the body).

The client rotates the token itself when given `refresh`: it calls `run` before a request once `expiresAt` is within `beforeMs` (five minutes by default) and once more when a request comes back 401, then retries that request. Concurrent requests share one `run`; a delayed 401 from an older token retries with the token already refreshed by another request. A second 401 rejects as usual. The request deadline and cancellation cover refresh waits and the retry. Cancelling or timing out one request stops its wait without interrupting a shared refresh. `run` does the persistence and returns the new token, and its time counts against the request's `timeoutMs`, so raise that on the client when the token store is slow.

```ts
import { ShortcutOAuth, ShortcutV4Client } from '@shortcut/client/v4';

const oauth = new ShortcutOAuth({ clientId, clientSecret, redirectUri });
let tokens = await oauth.exchangeAuthorizationCode(code);
await store.save(tokens);

const client = new ShortcutV4Client({
  token: tokens.access_token,
  refresh: {
    expiresAt: tokens.access_token_expires_at,
    run: async () => {
      tokens = await oauth.refreshAccessToken(tokens);
      await store.save(tokens);
      return {
        token: tokens.access_token,
        expiresAt: tokens.access_token_expires_at,
      };
    },
  },
});
```

### `@shortcut/client/webhooks`

Deliveries are signed with HMAC-SHA256 over the raw request body; the hex digest arrives in the `Payload-Signature` header. `ShortcutWebhookClient` verifies the signature in constant time, caps the body (2 MiB by default), rejects payloads that lack the delivery envelope or carry an unrecognized action or trigger shape, and optionally pins deliveries to one workspace or installation. `createHandler()` works as a Fetch handler and as a Node.js `(req, res)` handler, and dispatches typed payloads by kind and by interaction trigger. The Node handler is typed structurally (`ShortcutNodeRequest`, `ShortcutNodeResponse`), so the entrypoint's declarations never import `node:http` and other runtimes need no `@types/node`.

```ts
import { ShortcutWebhookClient } from '@shortcut/client/webhooks';

const webhooks = new ShortcutWebhookClient(process.env.WEBHOOK_SECRET, {
  workspaceId: process.env.WORKSPACE_ID, // optional: 403 for any other workspace
});
const handler = webhooks.createHandler();

handler.on('mentioned', async (payload) => {
  // payload.trigger is narrowed to the `mentioned` shape
});
handler.on('observer', async (payload) => {
  for (const action of payload.actions) {
    // action.changes is present on story updates only; absent means unavailable
  }
});

export default { fetch: handler }; // Cloudflare Workers
// http.createServer(handler);      // Node.js
```

For frameworks that already read the body, `verify(request)` and `verifyBody(bytes, signature)` return the verified payload or throw a `ShortcutWebhookError` carrying the HTTP status to return. `signShortcutWebhookBody()` produces a valid signature for testing an agent locally.

The v4 client is generated from `schema/shortcut.v4.openapi.json`, which `yarn sync:schema:v4` downloads and normalizes (the published document names responses and request bodies numerically).

## Play with It

You can play with it in your web browser with this live playground:

- [CodeSandbox](https://codesandbox.io/s/useshortcut-client-playground-48kq1)

## Documentation

[Documentation for this client](https://useshortcut.github.io/shortcut-client-js/).

[Documentation for the REST API](https://developer.shortcut.com/api/rest/v3).

## Publishing & Deployment

This library uses GitHub Actions for CI/CD. npm releases are staged automatically, then approved manually in npm.

### Release Process

To publish a new version:

1. Update the version in `package.json`
2. Commit and push to `main`
3. Create a GitHub Release with a version tag (e.g., `v2.4.0`)
4. The publish workflow will automatically build and stage the package versions on npm
5. Review and approve both staged packages in npm to publish them live

### Staged Publishing to npm

Staging is triggered automatically when a **GitHub Release is created**:

1. **Create a GitHub Release**: Go to the repository's Releases page and create a new release with a version tag (e.g., `v2.4.0`)
2. The `publish.yml` workflow will stage `@shortcut/client`, then stage the same built package under the legacy `@useshortcut/client` namespace
3. Review the staged packages in npm using `npm stage list`, `npm stage view <stage-id>`, or the npmjs.com **Staged Packages** tab
4. Approve both staged packages with 2FA using `npm stage approve <stage-id>` or the npmjs.com approval flow

The npm trusted publisher for this repository must allow `npm stage publish` for `.github/workflows/publish.yml`. Trusted publishing from GitHub Actions automatically generates provenance for public packages from public repositories. Staged publishing requires npm CLI `11.15.0` or later and Node.js `22.14.0` or later.

### Documentation Deployment

API documentation is automatically deployed to GitHub Pages on every push to `main`:

1. The `gh-pages.yml` workflow builds the documentation using TypeDoc
2. Documentation is published to https://useshortcut.github.io/shortcut-client-js/
