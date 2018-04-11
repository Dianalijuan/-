'use strict';
function create_updated_collection(collection_a, object_b) {

  var result = [];
  var result_a = [];
  for (var i = 0; i < collection_a.length;) {
    let count = 0;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[i] === collection_a[j]) {
        count++;
      }
    }
    result.push({
      key: collection_a[i],
      count: count
    })
    i += count;
  }
  for (var k = 0; k < result.length; k++) {
    if (object_b.value.indexOf(result[k].key) >= 0) {
      result[k].count = result[k].count - Math.floor(result[k].count / 3);
      result_a.push(result[k]);
    } else {
      result_a.push(result[k]);
    }
  }
  return result_a;
}

module.exports = create_updated_collection;
