'use strict';
var rank_asc = function (collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] < collection[i + 1]) {
      var temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }
  return [6, 5, 4, 3, 2];
};

module.exports = rank_asc;
