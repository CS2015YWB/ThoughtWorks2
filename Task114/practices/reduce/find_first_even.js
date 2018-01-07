'use strict';

function find_first_even(collection) {
  let result = 0;
  for(let i=0; i<collection.length; i++)
    if(collection[i] % 2 == 0){
      result = collection[i];
      break;
    }
  return result;
}

module.exports = find_first_even;

