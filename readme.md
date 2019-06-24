# Clubhouse-lib

A promise based interface to the Clubhouse API

[![CircleCI](https://circleci.com/gh/clubhouse/clubhouse-lib.svg?style=svg)](https://circleci.com/gh/clubhouse/clubhouse-lib)

## Install

```shell
npm install --save clubhouse-lib
```

## Usage

```javascript
import * as Clubhouse from 'clubhouse-lib';

const client = Clubhouse.create('your token value');

client.listMembers().then(console.log);

client.getMember('')
  .catch(x => console.error(x.body))
  .then(console.log);

client.listProjects().then(console.log);
```
