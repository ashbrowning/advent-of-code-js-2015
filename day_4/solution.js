'use strict';

const crypto = require('crypto');

module.exports = (secret, numberOfZeroes) => {
  let target = '';
  for (let i = 0; i < numberOfZeroes; i++) {
    target += '0';
  }

  let i = 0;
  for (; i < 10000000; ++i) {
    const hash = crypto.createHash('md5').update(secret + i);
    const digest = hash.digest('hex');
    if (digest.slice(0, numberOfZeroes) === target) {
      break;
    }
  }
  return i;
};
