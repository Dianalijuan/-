'use strict';
var map_to_three_multiples = function (collections) {
  var colllection = [];
  for (var i = 0; i < collections.length; i++) {
    colllection.push(collections[i] * 3);
  }
  return colllection;
};

module.exports = map_to_three_multiples;
