'use strict';

function median_to_letter(collection) {
  var sum = 0;
  var average = 0;
  var collection_a = 0;
  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
    average = sum / collection.length;
    collection_a = Math.ceil(average);
    if (collection_a > 0) {
      if (collection_a >= 1 && collection_a <= 26) {
        result = String.fromCharCode(96 + parseInt(collection_a));
      } else {
        while (collection_a > 26) {
          var count = parseInt(collection_a / 26);
          var remainder = collection_a % 26;
          if (remainder === 0) {
            remainder = 26;
            count--;
            result = String.fromCharCode(96 + parseInt(remainder));
          } else {
            result = String.fromCharCode(96 + parseInt(remainder));
          }
          collection_a = count;
        }
        result = String.fromCharCode(96 + parseInt(collection_a)) + result;
      }
    }
  }
  return result;
}

module.exports = median_to_letter;
