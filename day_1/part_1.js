'use strict';

const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`, { encoding: 'utf8' });

let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    count++;
  } else if (input[i] === ')') {
    count--;
  }
}

console.log(count);
