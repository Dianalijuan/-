'use strict';
function one_add_next_multiply_three(collection_a) {
  var collection = [];
  for (var i = 0; i < collection_a.length - 1; i++) {
    collection.push((collection_a[i] + collection_a[i + 1]) * 3);
  }
  return collection;
}
module.exports = one_add_next_multiply_three;
