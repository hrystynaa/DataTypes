'use strict';

const countTypesInArray = (obj) => {
  const hash = {};
  for (const value of obj) {
    if (hash[typeof(value)]) ++hash[typeof(value)];
    else hash[typeof(value)] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
