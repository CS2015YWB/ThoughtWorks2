'use strict';

function calculate_elements_sum(collection) {
  let result = 0;
  for(let i=0; i<collection.length; i++)
    result = result + collection[i];
  return result;
}

module.exports = calculate_elements_sum;

