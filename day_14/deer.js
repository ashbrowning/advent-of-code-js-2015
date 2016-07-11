'use strict';

module.exports = class Deer {
  constructor(name, speed, flightTime, restTime) {
    this.name = name;
    this.speed = speed;
    this.flightTime = flightTime;
    this.restTime = restTime;
    this.cycleTime = flightTime + restTime;
    this.currentDistance = 0;
    this.score = 0;
  }

  getDistance(time) {
    const cycles = Math.floor(time / this.cycleTime);
    const timeInCurrentCycle = time % this.cycleTime;
    let flightTime = this.flightTime * cycles;
    flightTime += (timeInCurrentCycle >= this.flightTime) ? this.flightTime : timeInCurrentCycle;
    return this.speed * flightTime;
  }

  incrementScore() {
    this.score++;
  }
};
