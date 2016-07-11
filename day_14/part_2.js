'use strict';

const getDeer = require('./getDeer.js');

module.exports = input => {
  const deers = getDeer(input);
  let time = 1;

  while (time <= 2503) {
    let furthestDeers = [];
    let furthestDistance = 0;
    for (let i = 0; i < deers.length; i++) {
      const deer = deers[i];
      const distance = deer.getDistance(time);
      if (distance > furthestDistance) {
        furthestDistance = distance;
        furthestDeers = [deer];
      } else if (distance === furthestDistance) {
        furthestDeers.push(deer);
      }
    }

    furthestDeers.forEach(deer => deer.incrementScore());
    time++;
  }

  return deers.reduce((topScore, deer) => {
    if (topScore < deer.score) {
      return deer.score;
    }
    return topScore;
  }, 0);
};
