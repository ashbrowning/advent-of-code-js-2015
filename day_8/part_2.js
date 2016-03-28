'use strict';

module.exports = strings => {
  let stringSize = 0;
  let encodedSize = 0;

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    stringSize += str.length;

    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/"/g, '\\"');

    // Plus 2 for the beginning and end double quote marks
    encodedSize += str.length + 2;
  }
  return encodedSize - stringSize;
};
