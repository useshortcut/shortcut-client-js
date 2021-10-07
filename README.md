<p align="center">
  <img height="60" src="https://user-images.githubusercontent.com/7189823/133838642-9a05e1ec-9a79-46ae-b22e-a8b931caf233.png" alt="Shortcut logo">
</p>

<h3 align="center">
  @useshortcut/client
</h3>

<p align="center">
  A library for interacting with the Shortcut (formerly Clubhouse) REST API
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@useshortcut/client">
    <img src="https://badge.fury.io/js/@useshortcut%2Fclient.svg" alt="Current npm package version." />
  </a>
  <a href="https://circleci.com/gh/useshortcut/shortcut-client-js">
    <img src="https://circleci.com/gh/useshortcut/shortcut-client-js.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://circleci.com/gh/useshortcut/shortcut-client-js">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=useshortcut">
    <img src="https://img.shields.io/twitter/follow/useshortcut.svg?label=Follow%20@useshortcut" alt="Follow @useshortcut" />
  </a>
</p>

<br>

## Getting Started

### Installation

You can install `@useshortcut/client` with [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).

```shell
npm install --save @useshortcut/client
```

or

```shell
yarn add @useshortcut/client
```

### How to Get an API Token

The Shortcut API uses token-based authentication, you will need one to use this library.

To generate an API token, go to https://app.shortcut.com/settings/account/api-tokens. To make it easier to explore our API, we recommend saving this token as an environment variable in your local dev environment:

```bash
export SHORTCUT_API_TOKEN="YOUR API TOKEN HERE"
```

This will allow you to copy and paste many examples in the documentation to try them out.

Requests made with a missing or invalid token will get a `401 Unauthorized` response. All requests must be made over HTTPS. Tokens provide complete access to your Shortcut account, **so keep them secure**. Don’t paste them into your source code, use an environment variable instead. For security reasons, we will immediately invalidate any tokens we find have been made public.

## Usage

To see all available exports, take a look at the [API documentation](https://useshortcut.github.io/shortcut-client-js/) or check out the `.d.ts` files in this repository.

```javascript
import { ShortcutClient } from '@useshortcut/client';
// const { ShortcutClient } = require('@useshortcut/client');

const shortcut = new ShortcutClient('YOUR_API_TOKEN'); // See https://github.com/useshortcut/shortcut-client-js#how-to-get-an-api-token

shortcut.getCurrentMemberInfo().then((response) => console.log(response?.data));

shortcut.listProjects().then((response) => console.log(response?.data));
```

## Play with It

You can play with it in your web browser with this live playground: 

- [CodeSandbox](https://codesandbox.io/s/useshortcut-client-playground-48kq1)

## Documentation

[Documentation for this client](https://useshortcut.github.io/shortcut-client-js/).

[Documentation for the REST API](https://shortcut.com/api/rest).
