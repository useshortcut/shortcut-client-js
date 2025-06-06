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

## Play with It

You can play with it in your web browser with this live playground:

- [CodeSandbox](https://codesandbox.io/s/useshortcut-client-playground-48kq1)

## Documentation

[Documentation for this client](https://useshortcut.github.io/shortcut-client-js/).

[Documentation for the REST API](https://developer.shortcut.com/api/rest/v3).
