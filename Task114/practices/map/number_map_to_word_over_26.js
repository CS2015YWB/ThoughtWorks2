'use strict';
let number_map_to_word_over_26 = function(collection){
  let result = [];
  let arr = [], n = 0;
  for(let i=97;i<=122;i++)
    arr[n++] = String.fromCharCode(i);
  for(let i=97;i<=122;i++)
    for(let k=97;k<=122;k++)
      arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
  for(let i in collection)
    result.push(arr[collection[i]-1]);
  return result;
}

module.exports = number_map_to_word_over_26;
