'use strict';

function compare_collections(collection_a, collection_b) {
  let result = 0;
  for(let i=0; i<collection_a.length; i++)
    if(collection_a.sort()[i] === collection_b.sort()[i])
      result++;
  if(result == collection_b.length)
    return true;
}

module.exports = compare_collections;


