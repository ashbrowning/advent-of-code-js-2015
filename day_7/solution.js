'use strict';

const fs = require('fs');

const operations = {
  NOTRANSFORM: x => x,
  NOT: x => ~x,
  OR: (x, y) => x | y,
  AND: (x, y) => x & y,
  RSHIFT: (x, y) => x >>> y,
  LSHIFT: (x, y) => x << y,
};

const wires = {};

function createWire(value, operationFn, operands) {
  return {
    value,
    operationFn,
    operands,
  };
}

/**
 * Given a wire, find its value.
 * If its value depends on other wires, push those wires onto the wireStack for resolving
 */
function resolveWire(wireId) {
  const wireStack = [wireId];

  while (wireStack.length > 0) {
    const wire = wires[wireStack[0]];

    // If the wire has a value, we do not need to any further evaluation of the wire
    // so pop it off the stack
    if (wire.value !== null) {
      wireStack.shift();
      continue;
    }

    const operandValues = [];
    const allOperandsResolved = wire.operands.every(operand => {
      const isNumber = !isNaN(operand);
      if (isNumber) {
        operandValues.push(operand);
        return true;
      }

      const operandValue = wires[operand].value;
      if (operandValue !== null) {
        operandValues.push(operandValue);
        return true;
      }

      wireStack.unshift(operand);
      return false;
    });

    if (!allOperandsResolved) {
      continue;
    }

    // We have all operands - run the gate and store the value
    wire.value = wire.operationFn.apply(this, operandValues);
    wireStack.shift();
  }

  return wires[wireId];
}

function parseLine(line) {
  const [gate, wireId] = line.split(' -> ');
  const parts = gate.split(' ');

  switch (parts.length) {
    case 1: {
    // (a|5) -> b
      const val = parseInt(parts[0], 10);
      wires[wireId] = createWire(isNaN(val) ? null : val, operations.NOTRANSFORM, [parts[0]]);
      break;
    }
    case 2:
    // NOT
      wires[wireId] = createWire(null, operations[parts[0]], [parts[1]]);
      break;
    case 3:
    // AND OR RSHIFT LSHIFT
      wires[wireId] = createWire(null, operations[parts[1]], [parts[0], parts[2]]);
      break;
    default:
      break;
  }
}

function overrideValues(overrides) {
  const keys = Object.keys(overrides);
  keys.forEach(key => {
    wires[key].value = overrides[key];
  });
}

function solve(overrides) {
  const lines = fs.readFileSync('input.txt', { encoding: 'utf8' }).split('\n');
  lines.forEach(parseLine);
  overrideValues(overrides || {});
  resolveWire('a');
  console.log(wires.a.value);
  return wires.a.value;
}

module.exports = solve;
