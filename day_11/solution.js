'use strict';

const bannedChars = ['i', 'o', 'l'];

function containtsStraight(password) {
  // Convert chars to charcodes on the fly as we might not need to do it for the whole string
  const passwordIntStack = [password.charCodeAt(0), password.charCodeAt(1)];
  for (let i = 2; i < password.length; i++) {
    passwordIntStack.push(password.charCodeAt(i));
    if (passwordIntStack[i] - 2 === passwordIntStack[i - 2] &&
      passwordIntStack[i] - 1 === passwordIntStack[i - 1]) {
      return true;
    }
  }
  return false;
}

// Banned chars are i, o, l
function containsBannedChars(password) {
  for (let i = 0; i < password.length; ++i) {
    if (password[i] === bannedChars[0] ||
      password[i] === bannedChars[1] ||
      password[i] === bannedChars[2]) {
      return true;
    }
  }
  return false;
}

function incrementString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const charCode = str.charCodeAt(i);
    if (charCode === 122) {
      newString = `a${newString}`;
    } else {
      newString = str.slice(0, i) + String.fromCharCode(charCode + 1) + newString;
      break;
    }
  }
  return newString;
}

function hasTwoPair(str) {
  let foundPair = '';
  let previousChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (previousChar !== str[i]) {
      previousChar = str[i];
      continue;
    }

    if (foundPair === '') {
      foundPair = str[i];
      previousChar = '';
    } else if (foundPair !== str[i]) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

module.exports = (input) => {
  let password = input;

  /* eslint-disable no-constant-condition */
  while (true) {
    password = incrementString(password);

    if (!hasTwoPair(password)) {
      continue;
    }

    if (!containtsStraight(password)) {
      continue;
    }

    if (containsBannedChars(password)) {
      continue;
    }

    return (password);
  }
};
