<p align="center">
  <img height="60" src="https://user-images.githubusercontent.com/7189823/67512945-deb55180-f667-11e9-823f-023d1629f868.png" alt="Clubhouse logo">
</p>

<h3 align="center">
  Clubhouse-lib
</h3>

<p align="center">
  A library for interacting with the Clubhouse REST API
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/clubhouse-lib">
    <img src="https://badge.fury.io/js/clubhouse-lib.svg" alt="Current npm package version." />
  </a>
  <a href="https://circleci.com/gh/clubhouse/clubhouse-lib">
    <img src="https://circleci.com/gh/clubhouse/clubhouse-lib.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://circleci.com/gh/clubhouse/clubhouse-lib">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=clubhouse">
    <img src="https://img.shields.io/twitter/follow/clubhouse.svg?label=Follow%20@clubhouse" alt="Follow @clubhouse" />
  </a>
</p>

<hr/>

## Getting Started

### How To Get an API Token

TODO

### Installation

You can install clubhouse-lib with [NPM]() or [Yarn]().

```shell
npm install --save clubhouse-lib
```

or

```shell
yarn add clubhouse-lib
```

## Usage

```javascript
import Clubhouse from 'clubhouse-lib';

const client = Clubhouse.create('your token value'); // See https://github.com/clubhouse/clubhouse-lib#how-to-get-an-api-token

client.listMembers().then(console.log);

client.getMember('')
  .catch(x => console.error(x.body))
  .then(console.log);

client.listProjects().then(console.log);
```

## Play with It

You can play with it in your web browser with this live playground: TODO

## Documentation

TODO
