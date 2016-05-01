'use strict';

module.exports = input => {
  const res = input[0].match(/(-?[\d]+)/g);
  return res.reduce((total, val) => total + parseInt(val, 10), 0);
};
