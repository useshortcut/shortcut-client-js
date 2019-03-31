#!/usr/bin/env node

const fs = require('fs');

const input = 'src/index.js';
const output = 'typings/index.d.ts';

fs.readFile(input, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let client = data.split('\n')
    .filter(f => f.match(/^  \w.*(.*): .*{$/))
    .map(f => f
      .replace(/ {$/, '')
      .replace(': ?', '?: ')
    ).join('\n');

  fs.readFile('src/types.js', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    const types = data.split('\n')
      .map(f => f
        .replace('/\* @flow \*/', '')
        .replace(/,$/, ';')
        .replace(/<\*>/g, '<any>')
        .replace(': ?', '?: ')
      ).join('\n');

    const result = `export default class Client {
${client}
}

export function create(token: string, config?: any): Client
${types}
`;
    fs.writeFile(output, result, 'utf8', err => {
      if (err) return console.log(err);
    });
  });
});
