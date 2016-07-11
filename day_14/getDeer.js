'use strict';

const Deer = require('./deer.js');

module.exports = input => {
  // Array->string-> regex because of linting max line length
  const lineRegex = new RegExp(['([\\w]*) can fly ([\\d]*) km\\/s for ([\\d]*) seconds, ',
  'but then must rest for ([\\d]*) seconds'].join(''));

  return input.map(line => {
    const regexResults = lineRegex.exec(line);
    return new Deer(regexResults[1],
      parseInt(regexResults[2], 10),
      parseInt(regexResults[3], 10),
      parseInt(regexResults[4], 10));
  });
};
