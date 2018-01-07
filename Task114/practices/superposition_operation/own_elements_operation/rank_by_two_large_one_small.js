'use strict';
function rank_by_two_large_one_small(collection){
  let result1 = [], result = [];
  result1 = collection.sort(function(a,b){
    return a-b;
  });
  for(let i = 1; i<=parseInt(result1.length/3); i++){
    result.push(result1[i*3-2]);
    result.push(result1[i*3-1]);
    result.push(result1[i*3-3]);
  }
  for(let j=parseInt(result1.length/3)*3; j<result1.length; j++)
    result.push(result1[j]);
  return result;
}
module.exports = rank_by_two_large_one_small;
