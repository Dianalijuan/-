'use strict';

function compare_collections(collection_a, collection_b) {
  var collection = true;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] !== collection_b[i] || collection_a.length !== collection_b.length) {
      collection = false;
    } else {
      return collection;
    }
  }
}

module.exports = compare_collections;


