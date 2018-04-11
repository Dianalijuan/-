'use strict';
function create_updated_collection(collection_a, object_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (object_b.value.indexOf(collection_a[i].key) >= 0) {
      collection_a[i].count--;
      result.push(collection_a[i]);
    } else {
      result.push(collection_a[i]);
    }
  }
  return result;
}


module.exports = create_updated_collection;
