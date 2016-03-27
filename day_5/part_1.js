'use strict';

const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
const bannedSet = new Set(['ab', 'cd', 'pq', 'xy']);

module.exports = words => {
  let niceCount = 0;

  function checkVowel(letter, vowelCount) {
    if (vowelsSet.has(letter)) {
      vowelCount.push(letter);
    }
    return vowelCount;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const vowelCount = [];

    checkVowel(word[0], vowelCount);
    let hasDouble = false;
    let hasThreeVowels = false;
    let isNaughty = false;

    for (let j = 1; j < word.length; j++) {
      if (bannedSet.has(word[j - 1] + word[j])) {
        isNaughty = true;
        break;
      }

      if (!hasThreeVowels) {
        checkVowel(word[j], vowelCount);
        if (vowelCount.length >= 3) {
          hasThreeVowels = true;
        }
      }

      if (!hasDouble) {
        if (word[j] === word[j - 1]) {
          hasDouble = true;
        }
      }
    }

    if (!isNaughty && hasDouble && hasThreeVowels) {
      niceCount++;
    }
  }

  return niceCount;
};
