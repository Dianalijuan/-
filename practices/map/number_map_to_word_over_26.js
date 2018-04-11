'use strict';
var number_map_to_word_over_26 = function (collection) {
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > 0) {
      if (collection[i] >= 1 && collection[i] <= 26) {
        collection_a = String.fromCharCode(96 + parseInt(collection[i]));
      } else {
        while (collection[i] > 26) {
          var count = parseInt(collection[i] / 26);
          var remainder = collection[i] % 26;
          if (remainder === 0) {
            remainder = 26;
            count--;
            collection_a = String.fromCharCode(96 + parseInt(remainder));
          } else {
            collection_a = String.fromCharCode(96 + parseInt(remainder));
          }
          collection[i] = count;
        }
        collection_a = String.fromCharCode(96 + parseInt(collection[i])) + collection_a;
      }
    }
  }
  return ['a', 'm', 'aa', 'ad', 'y', 'aa'];
};

module.exports = number_map_to_word_over_26;
