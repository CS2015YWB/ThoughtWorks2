function create_updated_collection(collection_a, object_b) {
  let collection_c= [];
  let key = collection_a[0];
  let count = 0;
  let arr = new Array();
  for (let i = 0; i < collection_a.length; i++) {
      if (key == collection_a[i]) {
          count++;
      }
      if ((key != collection_a[i]) || (i == collection_a.length - 1)) {
          collection_c.push({key: key,count: count});
          key = collection_a[i];
          count = 1;
      }
      if(collection_a[i].length > 1) {
        key = collection_a[i].charAt(0);
        count = collection_a[i].charAt(2);
        count = parseInt(count);
        collection_c.push({key:key,count:count});
      }
    }
  for(let i = 0; i < collection_c.length; i++)
    for(let j = 0; j < object_b.value.length; j++)
      if(collection_c[i].key == object_b.value[j]) {
        collection_c[i].count = collection_c[i].count - parseInt(collection_c[i].count/3);
    }
  return collection_c;
}    

module.exports = create_updated_collection;
