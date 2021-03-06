'use strict';
function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length;) {
    let count = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    result.push({
      key: collection[i],
      count: count
    })
    i += count;
  }
  return result;
}

module.exports = count_same_elements;
