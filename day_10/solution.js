'use strict';

function lookAndSay(input) {
  let current = input[0];
  let count = 1;
  let output = '';
  for (let i = 1; i < input.length; i++) {
    if (input[i] === current) {
      count++;
    } else {
      output += count + current;
      count = 1;
      current = input[i];
    }
  }
  output += count + current;
  return output;
}

module.exports = (input, length) => {
  let current = input[0];
  for (let i = 0; i < length; i++) {
    current = lookAndSay(current);
  }
  return current.length;
};
