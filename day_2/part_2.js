'use strict';

module.exports = presentArray => presentArray.reduce((prev, dimStr) => {
  let dimensions = dimStr.split('x');
  dimensions = dimensions.map(dim => parseInt(dim, 10));
  dimensions = dimensions.sort((a, b) => a - b);

  const ribbon = (dimensions[0] + dimensions[1]) * 2;
  const volume = dimensions[0] * dimensions[1] * dimensions[2];

  return ribbon + volume + prev;
}, 0);
