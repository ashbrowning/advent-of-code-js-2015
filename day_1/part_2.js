'use strict';

module.exports = inputArray => {
  const input = inputArray[0];
  let count = 0;
  let i = 0;
  for (; i < input.length; i++) {
    if (input[i] === '(') {
      count++;
    } else if (input[i] === ')') {
      count--;
      if (count === -1) {
        break;
      }
    }
  }

  return i + 1;
};
