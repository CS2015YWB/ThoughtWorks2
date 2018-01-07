'use strict';

function double_to_one(collection) {
  let result0 = [];
  let result = [];
  let hash = {};
  for(let i=0; i<collection.length; i++)
    for(let j=0; j<collection[i].length; j++)
      result0.push(collection[i][j]);

  for(let i=0; i<result0.length; i++) {
    if(!hash[result0[i]]) {
      result.push(result0[i]);
      hash[result0[i]] = 1;
    }
  }
  return result;
}

module.exports = double_to_one;
