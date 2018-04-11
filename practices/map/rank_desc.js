'use strict';
var rank_desc = function (collection) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > collection[i + 1]) {
      var temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }
  return collection;
};

module.exports = rank_desc;
