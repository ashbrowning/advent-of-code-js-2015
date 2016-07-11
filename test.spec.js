'use strict';
/* global describe it expect */

const launcher = require('./launcher.js');

describe('Advent of code tests', () => {
  it('should give correct answers to day 1 part 1', () => {
    expect(launcher(1, 1)).toBe(138);
  });
  it('should give correct answers to day 1 part 2', () => {
    expect(launcher(1, 2)).toBe(1771);
  });
  it('should give correct answers to day 2 part 1', () => {
    expect(launcher(2, 1)).toBe(1598415);
  });
  it('should give correct answers to day 2 part 2', () => {
    expect(launcher(2, 2)).toBe(3812909);
  });
  it('should give correct answers to day 3 part 1', () => {
    expect(launcher(3, 1)).toBe(2592);
  });
  it('should give correct answers to day 3 part 2', () => {
    expect(launcher(3, 2)).toBe(2360);
  });
  it('should give correct answers to day 4 part 1', () => {
    expect(launcher(4, 1)).toBe(346386);
  });
  it('should give correct answers to day 4 part 2', () => {
    expect(launcher(4, 2)).toBe(9958218);
  });
  it('should give correct answers to day 5 part 1', () => {
    expect(launcher(5, 1)).toBe(238);
  });
  it('should give correct answers to day 5 part 2', () => {
    expect(launcher(5, 2)).toBe(69);
  });
  it('should give correct answers to day 6 part 1', () => {
    expect(launcher(6, 1)).toBe(543903);
  });
  it('should give correct answers to day 6 part 2', () => {
    expect(launcher(6, 2)).toBe(14687245);
  });
  it('should give correct answers to day 7 part 1', () => {
    expect(launcher(7, 1)).toBe(956);
  });
  it('should give correct answers to day 7 part 2', () => {
    expect(launcher(7, 2)).toBe(40149);
  });
  it('should give correct answers to day 8 part 1', () => {
    expect(launcher(8, 1)).toBe(1350);
  });
  it('should give correct answers to day 8 part 2', () => {
    expect(launcher(8, 2)).toBe(2085);
  });
  it('should give correct answers to day 9 part 1', () => {
    expect(launcher(9, 1)).toBe(117);
  });
  it('should give correct answers to day 9 part 2', () => {
    expect(launcher(9, 2)).toBe(909);
  });
  it('should give correct answers to day 10 part 1', () => {
    expect(launcher(10, 1)).toBe(252594);
  });
  it('should give correct answers to day 10 part 2', () => {
    expect(launcher(10, 2)).toBe(3579328);
  });
  it('should give correct answers to day 11 part 1', () => {
    expect(launcher(11, 1)).toBe('hepxxyzz');
  });
  it('should give correct answers to day 11 part 2', () => {
    expect(launcher(11, 2)).toBe('heqaabcc');
  });
  it('should give correct answers to day 12 part 1', () => {
    expect(launcher(12, 1)).toBe(191164);
  });
  it('should give correct answers to day 12 part 2', () => {
    expect(launcher(12, 2)).toBe(87842);
  });
  it('should give correct answers to day 13 part 1', () => {
    expect(launcher(13, 1)).toBe(618);
  });
  it('should give correct answers to day 13 part 2', () => {
    expect(launcher(13, 2)).toBe(601);
  });
  it('should give correct answers to day 14 part 1', () => {
    expect(launcher(14, 1)).toBe(2696);
  });
  it('should give correct answers to day 14 part 2', () => {
    expect(launcher(14, 2)).toBe(1084);
  });
});
