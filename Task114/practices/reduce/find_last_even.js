'use strict';

function find_last_even(collection) {
  let result = 0;
  for(let i=collection.length-1; i>0; i--)
    if(collection[i] % 2 == 0){
      result = collection[i];
      break;
    }
  return result;
}

module.exports = find_last_even;
