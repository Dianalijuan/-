'use strict';

function hybrid_operation(collection) {

  var sum = 0;
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    collection_a.push(collection[i] * 3 + 2);
    sum += collection_a[i];
  }
  return sum;
}

module.exports = hybrid_operation;

