'use strict';

const getDeer = require('./getDeer.js');

module.exports = input => {
  const deers = getDeer(input);
  return deers.reduce((furthestDistance, deer) => {
    const dist = deer.getDistance(2503);
    return furthestDistance < dist ? dist : furthestDistance;
  }, 0);
};
