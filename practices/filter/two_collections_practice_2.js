'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  var collection = collection_a.concat(collection_b);

  for (var i = 0; i < collection_b.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (collection[j] === collection_b[i]){
        collection.splice(j, 1);
        j--;
      }
    }

  }
  return collection;


}

module.exports = choose_no_common_elements;
