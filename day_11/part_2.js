'use strict';

const solution = require('./solution.js');

module.exports = (input) => {
  const result = solution(input[0]);
  return solution(result);
};
