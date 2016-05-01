'use strict';

function getTotalFromJson(json) {
  if (Array.isArray(json)) {
    let count = 0;
    for (let i = 0; i < json.length; i++) {
      count += getTotalFromJson(json[i]);
    }
    return count;
  } else if (typeof json === 'object') {
    const iter = Object.keys(json);
    let count = 0;
    for (let i = 0; i < iter.length; i++) {
      if (json[iter[i]] === 'red') {
        return 0;
      }
      count += getTotalFromJson(json[iter[i]]);
    }
    return count;
  } else if (typeof json === 'number') {
    return json;
  }
  return 0;
}

module.exports = input => {
  const json = JSON.parse(input[0]);
  return getTotalFromJson(json);
};
