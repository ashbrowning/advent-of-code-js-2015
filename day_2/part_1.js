'use strict';

const fs = require('fs');

const input = fs.readFileSync('input.txt', { encoding: 'utf8' });
const presentArray = input.split('\n');

const totalPaper = presentArray.reduce((prev, dimStr) => {
  const dimensions = dimStr.split('x');
  const length = parseInt(dimensions[0], 10);
  const width = parseInt(dimensions[1], 10);
  const height = parseInt(dimensions[2], 10);

  const side1 = length * width;
  const side2 = width * height;
  const side3 = height * length;
  let overage = side3;

  if (side1 < side2 && side1 < side3) {
    overage = side1;
  } else if (side2 < side3) {
    overage = side2;
  }

  const wrappingArea = overage + (2 * side1) + (2 * side2) + (2 * side3);

  return wrappingArea + prev;
}, 0);

console.log(totalPaper);
