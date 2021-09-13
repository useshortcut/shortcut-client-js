<p align="center">
  <img height="60" src="https://user-images.githubusercontent.com/7189823/130458484-44607d13-801b-43b4-b0d5-c48f492de61a.png" alt="Shortcut logo">
</p>

<h3 align="center">
  shortcut-lib
</h3>

<p align="center">
  A library for interacting with the Shortcut REST API
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/shortcut-lib">
    <img src="https://badge.fury.io/js/shortcut-lib.svg" alt="Current npm package version." />
  </a>
  <a href="https://circleci.com/gh/useshortcut/shortcut-lib">
    <img src="https://circleci.com/gh/useshortcut/shortcut-lib.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://circleci.com/gh/useshortcut/shortcut-lib">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=useshortcut">
    <img src="https://img.shields.io/twitter/follow/useshortcut.svg?label=Follow%20@useshortcut" alt="Follow @useshortcut" />
  </a>
</p>

<br>

## Getting Started

### Installation

You can install `shortcut-lib` with [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).

```shell
npm install --save shortcut-lib
```

or

```shell
yarn add shortcut-lib
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

```javascript
import Shortcut from 'shortcut-lib';

const client = Shortcut.create('your token value'); // See https://github.com/useshortcut/shortcut-lib#how-to-get-an-api-token

client.listMembers().then(console.log);

client.getMember('')
  .catch(x => console.error(x.body))
  .then(console.log);

client.listProjects().then(console.log);
```

## Play with It

You can play with it in your web browser with this live playground: 

- [CodeSandbox](https://codesandbox.io/s/clubhouse-lib-playground-r447i)

## Documentation

[Documentation for the REST API](https://shortcut.com/api/rest).
