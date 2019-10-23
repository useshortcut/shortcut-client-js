#!/usr/bin/env node

const fs = require('fs');

const clientFile = 'src/index.js';
const typesFile = 'src/types.js';
const output = 'typings/index.d.ts';

fs.readFile(clientFile, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    process.exit(2);
  }

  const clientMethods = data
    .split('\n')
    .filter(line => line.match(/^ {2}(?!static create)\w.*(.*): .*{$/))
    .map(line => line.replace(/ {$/, '').replace(': ?', '?: '))
    .join('\n');

  fs.readFile(typesFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }

    const types = data
      .split('\n')
      .map(line =>
        line
          .replace('/* @flow */', '')
          .replace(/,$/, ';')
          .replace(/<\*>/g, '<any>')
          .replace(': ?', '?: '),
      )
      .join('\n');

    const result = `export default class Client {
${clientMethods}
}

export function create(token: string, config?: any): Client
${types}
`;
    fs.writeFile(output, result, 'utf8', err => {
      if (err) {
        console.log(err);
        process.exit(2);
      }
    });
  });
});
