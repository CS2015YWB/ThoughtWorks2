'use strict';

function compute_chain_median(collection) {
  let result1 = collection.split('->');
  let result2 = [];
  for(let i=0; i<result1.length; i++) {
    result2[i] = parseInt(result1[i]);
  }
  let result = result2.sort(function(a, b)
  { return a - b; });
  let len = result.length;
  if(result.length % 2 === 0)
    return ((result[len/2]+result[len/2-1])/2);
  else
    return result[(len-1)/2];
}

module.exports = compute_chain_median;
