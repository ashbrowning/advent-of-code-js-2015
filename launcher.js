const fs = require('fs');
const moment = require('moment');

module.exports = (dayArg, partArg) => {
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

  return result;
};
