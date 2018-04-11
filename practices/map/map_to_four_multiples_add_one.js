'use strict';
var map_to_four_multiples_add_one = function (collection_a) {
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {

    result.push( collection_a[i] * 4 + 1);

  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
