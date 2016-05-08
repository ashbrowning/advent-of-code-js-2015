'use strict';

function permuteWrap(permuteWrapInput) {
  const permArr = [];
  const usedChars = [];

  // http://stackoverflow.com/a/20871714
  function permute(input) {
    let i;
    for (i = 0; i < input.length; i++) {
      const ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }

  return permute(permuteWrapInput);
}

function calculateHappiness(arr, people) {
  const firstPerson = arr[0];
  const lastPerson = arr[arr.length - 1];

  let total = people[firstPerson][lastPerson] + people[lastPerson][firstPerson];

  for (let i = 1; i < arr.length; ++i) {
    total += people[arr[i - 1]][arr[i]];
    total += people[arr[i]][arr[i - 1]];
  }

  return total;
}

function generatePeopleObj(inputArr, addMeBool) {
  let people = {};

  if (addMeBool) {
    people = {
      Ash: {},
    };
  }

  for (let i = 0; i < inputArr.length; ++i) {
    const str = inputArr[i].split(' ');

    const person1 = str[0];
    const person2 = str[10].replace('.', '');

    if (!people[person1]) {
      people[person1] = {};
    }

    if (!people[person2]) {
      people[person2] = {};
    }

    const sign = str[2] === 'lose' ? '-' : '';
    const value = parseInt(sign + str[3], 10);
    people[person1][person2] = value;

    if (addMeBool) {
      people.Ash[person1] = 0;
      people[person1].Ash = 0;
    }
  }

  return people;
}

module.exports = (input, addMeBool) => {
  const people = generatePeopleObj(input, addMeBool);
  const peopleKeys = Object.keys(people);
  const combinations = permuteWrap(peopleKeys);

  let happiness = Number.MIN_VALUE;
  for (let i = 0; i < combinations.length; ++i) {
    const currentVal = calculateHappiness(combinations[i], people);
    if (currentVal > happiness) {
      happiness = currentVal;
    }
  }

  return happiness;
};
