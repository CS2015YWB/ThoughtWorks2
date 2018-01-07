'use strict';

function average_uneven(collection) {
  let result = 0;
  let k = 0;
  for(let i=0; i<collection.length; i++)
    if(collection[i]%2 != 0) {
      result += collection[i];
      k++;
  }
  return result/k;
}

module.exports = average_uneven;
