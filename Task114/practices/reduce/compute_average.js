'use strict';

function compute_average(collection) {
  let result = 0;
  for(let i=0; i<collection.length; i++)
    result = result + collection[i];
  return result/collection.length;
}

module.exports = compute_average;

