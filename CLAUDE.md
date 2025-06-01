# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **@shortcut/client** npm package - a TypeScript library providing a Promise-based client for the Shortcut REST API. The library uses code generation from the official Shortcut API swagger schema to create type-safe API bindings.

## Architecture

### Code Generation Pipeline

- **Source Schema**: `schema/shortcut.swagger.json` - Official Shortcut API schema
- **Generated Code**: `src/generated/` - Auto-generated API client, data contracts, and HTTP client
- **Main Client**: `src/ShortcutClient.ts` - Extends generated API class with authentication headers
- **Custom Templates**: `templates/http-client.ejs` - Custom template for HTTP client generation

### Key Components

- **ShortcutClient**: Main export class that wraps the generated API with authentication
- **Generated API**: Auto-generated from swagger schema using `swagger-typescript-api`
- **Data Contracts**: Type definitions for all API request/response objects
- **HTTP Client**: Axios-based HTTP client with configuration options

## Build and Development Commands

### Core Development

- **Build**: `yarn build` (generates API code + compiles TypeScript)
- **Generate API Client**: `yarn build:client` (from swagger schema)
- **Add TypeDoc Comments**: `yarn build:add-typedoc-comments` (post-process generated code)
- **Validate Examples**: `yarn validate:examples` (type-check example files)

### Schema Management

- **Sync Schema**: `yarn sync:schema` (fetch latest from Shortcut API)
- **Validate Schema**: `yarn validate:schema` (validate swagger schema)

### Testing and Quality

- **Run Tests**: `yarn test` (Jest with ts-jest preset)
- **Lint**: `yarn lint` (ESLint with TypeScript parser)
- **Format**: `yarn format` (Prettier formatting)
- **Format Check**: `yarn format:check` (check formatting without fixing)

### Documentation

- **Build Docs**: `yarn build:docs` (TypeDoc API documentation)

## Development Workflow

### Making Changes to Generated Code

- **NEVER** edit files in `src/generated/` directly - they are auto-generated
- To modify generated code behavior:
  1. Update the template in `templates/http-client.ejs`
  2. Modify the post-processing script in `scripts/add-typedoc-comments.ts`
  3. Run `yarn build:client` to regenerate

### API Schema Updates

- Run `yarn sync:schema` to fetch the latest API schema from Shortcut
- Run `yarn build:client` to regenerate the client with new schema
- Test changes and validate examples still work

### Testing Examples

- Examples in `examples/` directory require `SHORTCUT_API_TOKEN` environment variable
- Run examples with: `SHORTCUT_API_TOKEN=your_token npx ts-node examples/filename.ts`
- Use `yarn validate:examples` to type-check all examples without running them

## Code Style

### TypeScript Configuration

- Target: ES2015 with CommonJS modules
- Strict type checking enabled (except nullChecks)
- Output directory: `lib/` for compiled JavaScript + declarations

### Linting and Formatting

- ESLint with Airbnb base config + TypeScript extensions
- Prettier with single quotes, semicolons, trailing commas
- Import/export rules configured for TypeScript resolution
- Jest environment enabled for test files

## Key Files to Understand

- `src/ShortcutClient.ts` - Main client class with authentication
- `src/index.ts` - Package exports (client + generated types)
- `scripts/add-typedoc-comments.ts` - Post-processes generated code
- `templates/http-client.ejs` - Custom template for HTTP client generation
- `schema/shortcut.swagger.json` - API schema source of truth
