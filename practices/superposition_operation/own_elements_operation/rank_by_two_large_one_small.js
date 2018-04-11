'use strict';
function rank_by_two_large_one_small(collection) {
  collection.sort(function (a, b) {
    return a - b;
  });
  var result = [];
  for (var i = 0; i < collection.length - 2; i += 3) {
    result = collection[i];
    collection[i] = collection[i + 1];
    collection[i + 1] = collection[i + 2];
    collection[i + 2] = result;
  }

  return collection;
}

module.exports = rank_by_two_large_one_small;
