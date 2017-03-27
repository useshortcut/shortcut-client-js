# Clubhouse.js

A promise based interface to the Clubhouse API

## Install

```shell
npm install --save clubhouse-lib
```

## Usage

```javascript
import Clubhouse from 'clubhouse-lib';

const client = Clubhouse.create('your token value');

client.listMembers().then(console.log);

client.getMember('')
  .catch(x => console.error(x.body))
  .then(console.log);

client.listProjects().then(console.log);
```