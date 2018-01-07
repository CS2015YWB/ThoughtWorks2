'use strict';

function get_intersection(collection_a, collection_b) {
  let collection_c = [];
  let j = 0;
  for(let i=0; i<collection_b.length; i++)
    if(collection_a.indexOf(collection_b[i]) >= 0)
      collection_c[j++] = collection_b[i];
  return collection_c;
}

module.exports = get_intersection;
