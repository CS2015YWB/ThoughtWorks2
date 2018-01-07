'use strict';

function calculate_elements_sum(collection, element) {
  let result = 0;
  for(let i=0; i<collection.length; i++)
    if(collection[i] == element){
      result = i;
      break;
    }
  return result;
}

module.exports = calculate_elements_sum;

