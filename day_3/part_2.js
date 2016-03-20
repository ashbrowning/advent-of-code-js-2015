'use strict';

const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf8' });
const robo = {
  x: 0,
  y: 0,
};
const santa = {
  x: 0,
  y: 0,
};
const visitedSet = new Set();
visitedSet.add('0,0');

/* eslint no-param-reassign: [2, { "props": false }]*/
function move(direction, person) {
  switch (direction) {
    case '>':
      person.x++;
      break;
    case '<':
      person.x--;
      break;
    case '^':
      person.y++;
      break;
    case 'v':
      person.y--;
      break;
    default:
      break;
  }
}

for (let i = 0; i < input.length; i++) {
  const person = (i % 2) === 0 ? santa : robo;
  move(input[i], person);
  visitedSet.add(`${person.x},${person.y}`);
}

console.log(visitedSet.size);
