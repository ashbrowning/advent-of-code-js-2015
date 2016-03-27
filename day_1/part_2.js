'use strict';

module.exports = function(inputArray) {
  const input = inputArray[0];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      count++;
    } else if (input[i] === ')') {
      count--;
      if (count === -1) {
        return i + 1;
      }
    }
  }
}
