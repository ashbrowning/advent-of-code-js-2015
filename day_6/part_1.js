'use strict';

const fs = require('fs');

function processCoords(fromStr, toStr) {
  const fromCoord = fromStr.split(',');
  const toCoord = toStr.split(',');
  return {
    fromx: parseInt(fromCoord[0], 10),
    fromy: parseInt(fromCoord[1], 10),
    tox: parseInt(toCoord[0], 10),
    toy: parseInt(toCoord[1], 10),
  };
}

module.exports = function(instructions) {
  const lights = [];
  const SIZE = 1000;
  for (let i = 0; i < SIZE; ++i) {
    const row = [];
    for (let j = 0; j < SIZE; ++j) {
      row[j] = false;
    }
    lights[i] = row;
  }

  function toggle(coords) {
    for (let x = coords.fromx; x <= coords.tox; x++) {
      for (let y = coords.fromy; y <= coords.toy; y++) {
        lights[x][y] = !lights[x][y];
      }
    }
  }

  function turn(coords, stateStr) {
    const state = (stateStr === 'on');
    for (let x = coords.fromx; x <= coords.tox; x++) {
      for (let y = coords.fromy; y <= coords.toy; y++) {
        lights[x][y] = state;
      }
    }
  }

  for (let i = 0; i < instructions.length; ++i) {
    let instruction = instructions[i];
    instruction = instruction.split(' ');

    if (instruction[0] === 'toggle') {
      const coords = processCoords(instruction[1], instruction[3]);
      toggle(coords);
    } else {
      const coords = processCoords(instruction[2], instruction[4]);
      turn(coords, instruction[1]);
    }
  }

  let count = 0;

  for (let i = 0; i < SIZE; ++i) {
    for (let j = 0; j < SIZE; ++j) {
      count += lights[i][j] ? 1 : 0;
    }
  }

  return count;
}
