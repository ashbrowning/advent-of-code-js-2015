'use strict';

module.exports = inputArray => {
  let count = 0;
  const input = inputArray[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      count++;
    } else if (input[i] === ')') {
      count--;
    }
  }

  return count;
};
