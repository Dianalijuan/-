'use strict';
var number_map_to_word = function (collection) {
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    collection_a.push(String.fromCharCode(96 + parseInt(collection[i])));
  }
  return collection_a;
};

module.exports = number_map_to_word;
