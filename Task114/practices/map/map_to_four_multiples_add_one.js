'use strict';
let map_to_four_multiples_add_one = function(collection){
  let result = [];
  for(let i in collection)
    result.push(collection[i]*4+1);
  return result;
}

module.exports = map_to_four_multiples_add_one;
