'use strict';

function even_to_letter(collection) {

  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      collection_a.push(String.fromCharCode(96 + parseInt(collection[i])));
    }
  }
  return collection_a;
}

module.exports = even_to_letter;
