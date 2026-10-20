# AGENTS.md

`@shortcut/client` is the TypeScript client for the Shortcut REST API (v3 and v4), plus webhook helpers in `@shortcut/client/webhooks`. It uses Yarn 4 through Corepack, the Node version in `.nvmrc`, and vitest.

## Verify before pushing

Run `yarn install`, then `yarn verify`. It runs every `verify:<name>` script in `package.json`, and CI runs each of those scripts as a job named `<name>`. The last line lists the checks that failed. Run one check with `yarn verify:<name>`.

To add a CI check, add a `verify:<name>` script. CI builds its job list from those scripts, so do not add steps to `.github/workflows/ci.yml`.

Only `verify:docs` (typedoc) type-checks `src`, and it compiles without the DOM lib. A DOM-only type such as `CryptoKey` passes build, test, and lint, and fails `verify:docs`.

## Generated clients

swagger-typescript-api generates `src/generated/` (v3) and `src/v4/generated/` (v4), and both are committed. `yarn build` regenerates them, then runs the typedoc-comment codemod, tsdown, and `scripts/fix-cjs-dts.mts`. On a clean main it changes no tracked files.

Do not hand-edit generated files. Change the schema or the templates, run `yarn build`, and commit the output. The template overrides are in `templates/` (v3) and `templates/v4/`. A template without an override comes from `node_modules/swagger-typescript-api/templates/{base,modular}`.

`yarn sync:schema:v4` downloads the v4 spec and runs `scripts/normalize-v4-schema.mts`, which names responses by content so that a sync diff shows only real API changes.

## Tests and types

For a bug fix, add a regression test that fails before the fix.

Vitest does not type-check, and `tsconfig.json` excludes `__tests__`, so a type assertion in a test file checks nothing. Put type regressions that consumers would see in `scripts/check-package-types.mts`. It compiles a consumer of the built package in several module modes, and `verify:build` runs it. Its consumer fixture is a template string, so do not put backticks in comments inside it.

## Releases

Maintainers bump the version in separate PRs. Do not change `version` in a feature or fix PR.

## Rules and what enforces them

| Rule                                                                | Enforced by                                                                   |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Run every CI check before pushing.                                  | `yarn verify` runs the same `verify:*` scripts that CI's job matrix lists.    |
| Add a CI check as a `verify:<name>` script, not a workflow step.    | `scripts/__tests__/ci-workflow-test.ts`, run by `verify:test`.                |
| Keep `yarn.lock` in sync with `package.json`.                       | `yarn install --immutable` in `yarn verify` and in every CI job.              |
| `src` compiles without the DOM lib.                                 | `verify:docs`.                                                                |
| Format with oxfmt.                                                  | `verify:format-check`. `yarn format` fixes it.                                |
| Regenerate the clients with `yarn build`. Do not hand-edit them.    | Review only. No check compares committed output with `yarn build` output yet. |
| Put consumer type regressions in `scripts/check-package-types.mts`. | Review only. `verify:build` runs the script.                                  |
| Bump the version only in a separate PR.                             | Review only.                                                                  |
