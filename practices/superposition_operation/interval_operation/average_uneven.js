'use strict';

function average_uneven(collection) {

  var average = 0;
  var collection_a = [];
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      collection_a.push(collection[i]);
    }
  }
  for (var j = 0; j < collection_a.length; j++) {
    sum += collection_a[j];
    average = sum / collection_a.length;
  }
  return average;
}

module.exports = average_uneven;
