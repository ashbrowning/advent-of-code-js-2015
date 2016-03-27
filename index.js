'use strict';

const fs = require('fs');
const moment = require('moment');

const dayArg = process.argv[2];
const partArg = process.argv[3];

const solution = require(`./day_${dayArg}/part_${partArg}.js`);
const input = fs.readFileSync(
    `${__dirname}/day_${dayArg}/input.txt`,
    { encoding: 'utf8' }
  ).split('\n');

const startMoment = moment();
const result = solution(input);
const duration = moment().diff(startMoment);

console.log('Answer:', result);
console.log('Runtime:', moment(duration).format('m:s.SSS'));
