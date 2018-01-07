'use strict';
let map_to_three_multiples = function(collections){
  let result = [];
  for(let i in collections)
    result.push(collections[i]*3);
  return result;
}

module.exports = map_to_three_multiples;
