'use strict';

function choose_even(collection) {
  let result = [];
  let k = 0;
  for(let i=0; i<collection.length; i++) {
    if(collection[i]%2 === 0) {
      result[k++] = collection[i];
    }
  }
  return result;
}

module.exports = choose_even;
