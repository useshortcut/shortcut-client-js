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

  let clientMethods = data.split('\n')
    .filter(line => line.match(/^  \w.*(.*): .*{$/))
    .map(line => line
      .replace(/ {$/, '')
      .replace(': ?', '?: ')
    ).join('\n');

  fs.readFile(typesFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }

    const types = data.split('\n')
      .map(line => line
        .replace('/\* @flow \*/', '')
        .replace(/,$/, ';')
        .replace(/<\*>/g, '<any>')
        .replace(': ?', '?: ')
      ).join('\n');

    const nullableTypes = types.split('\n\n')
      .map(block => {
        if (block.includes('Change = {')) {
          return block;
        }
        const nullableBlock = block.split('\n')
          .map(line => {
            return line.replace(
              /^ {2}([a-zA-Z0-9_$]+)\?: ([a-zA-Z0-9_$<>]+)/,
              '  $1: $2 | null'
            );
          }).join('\n');
        return nullableBlock;
      }).join('\n\n')

    const result = `export default class Client {
${clientMethods}
}

export function create(token: string, config?: any): Client
${nullableTypes}
`;
    fs.writeFile(output, result, 'utf8', err => {
      if (err) {
        console.log(err);
        process.exit(2);
      }
    });
  });
});
