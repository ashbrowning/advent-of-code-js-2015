'use strict';

const fs = require('fs');

module.exports = function(words) {
  let niceCount = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let doesRepeat = false;

    // Key: pair, value: position of first character
    const pairs = {};
    let hasPair = false;

    pairs[word[0] + word[1]] = [0];

    for (let j = 2; j < word.length; j++) {
      if (word[j - 2] === word[j]) {
        doesRepeat = true;
      }

      if (!hasPair) {
        const pair = word[j - 1] + word[j];
        if (!pairs[pair]) {
          pairs[pair] = [j - 1];
        } else {
          const pairInstances = pairs[pair];
          pairInstances.push(j - 1);
          const endIndex = pairInstances.length - 1;
          const diff = pairInstances[endIndex] - pairInstances[0];
          hasPair = (diff > 1);
        }
      }

      if (hasPair && doesRepeat) {
        niceCount++;
        break;
      }
    }
  }

  return niceCount;
}
