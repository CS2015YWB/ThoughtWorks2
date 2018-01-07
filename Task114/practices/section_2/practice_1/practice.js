function count_same_elements(collection) {
  let result = [];
  let key = collection[0];
  let count = 0;
  for(let i = 0; i < collection.length; i++) {
     if(key == collection[i]) {
       count++;
     }
     if((key != collection[i])||(i == collection.length - 1)) {
       result.push({key: key,count: count});
       key = collection[i];
       count = 1;
     }
   }
  return result;
 }

module.exports = count_same_elements;
