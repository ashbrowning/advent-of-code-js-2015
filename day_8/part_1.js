'use strict';

module.exports = strings => {
  let stringSize = 0;
  let inMemSize = 0;

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    stringSize += str.length;
    str = str.replace(/\\(\\|"|x[0-9a-f]{2})/g, 'A');
    inMemSize += str.length;
  }

  // Add two chars for the first/last double quotes
  return stringSize - inMemSize + (strings.length * 2);
};
