'use strict';

// Inspired from http://stackoverflow.com/questions/9960908/permutations-in-javascript
function findShortestDistance(cityLookup) {
  let shortestDistance = Number.MIN_SAFE_INTEGER;
  const cityList = Object.keys(cityLookup);
  const visitedCities = [];

  function iter(input, currentDistance) {
    for (let i = 0; i < input.length; ++i) {
      const currentCity = input.splice(i, 1)[0];
      const previousCity = visitedCities[0];
      let tripDistance = currentDistance;

      tripDistance += previousCity ? cityLookup[currentCity][previousCity] : 0;
      visitedCities.unshift(currentCity);

      if (input.length === 0) {
        shortestDistance = shortestDistance < tripDistance ? tripDistance : shortestDistance;
      }

      iter(input, tripDistance);

      // finish up this iteration
      tripDistance -= previousCity ? cityLookup[currentCity][previousCity] : 0;
      input.splice(i, 0, currentCity);
      visitedCities.shift();
    }
  }
  iter(cityList, 0);
  return shortestDistance;
}

module.exports = distances => {
  const cityLookup = {};

  for (let i = 0; i < distances.length; i++) {
    const [, from, to, dist] = distances[i].match(/^(.*) to (.*) = ([0-9]*)$/);

    cityLookup[from] = cityLookup[from] || {};
    cityLookup[to] = cityLookup[to] || {};
    cityLookup[to][from] = cityLookup[from][to] = ~~dist;
  }
  return findShortestDistance(cityLookup);
};
