'use strict';
var single_element = function (collection) {
  var collection_a = [];
  var collection_b = [];
  for (var i = 0; i < collection.length; i++) {
    if (i % 2 !== 0) {
      collection_a.push(collection[i]);
    }
  }
  for (var j = 0; j < collection_a.length; j++) {
    if (collection_b.indexOf(collection_a[j]) === -1) {
      collection_b.push(collection_a[j]);
    }
  }

  return collection_b.splice(1, collection_b.length);


};
module.exports = single_element;

