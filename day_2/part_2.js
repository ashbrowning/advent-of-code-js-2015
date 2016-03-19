'use strict';

const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf8' });
const presentArray = input.split('\n');

const totalRibbon = presentArray.reduce((prev, dimStr) => {
  let dimensions = dimStr.split('x');
  dimensions = dimensions.map(dim => parseInt(dim, 10));
  dimensions = dimensions.sort((a, b) => a - b);

  const ribbon = (dimensions[0] + dimensions[1]) * 2;
  const volume = dimensions[0] * dimensions[1] * dimensions[2];

  return ribbon + volume + prev;
}, 0);

console.log(totalRibbon);
