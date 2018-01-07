function collect_same_elements(collection_a, object_b) {
  let result = [];
  for(let i = 0; i < collection_a.length; i++)
    for(let j = 0; j < object_b.value.length; j++) {
      if(collection_a[i].key == object_b.value[j])
        result.push(collection_a[i].key);
  }
  return result;
}

module.exports = collect_same_elements;
