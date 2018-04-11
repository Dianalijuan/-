'use strict';
var calculate_average = function (collection_a) {
  var sum = 0;
  var average = 0;
  var colletiob_b = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] % 2 === 0) {
      colletiob_b.push(collection_a[i]);
    }
  }
  for (var j = 0; j < colletiob_b.length; j++) {
    sum += colletiob_b[j];
    average = sum / colletiob_b.length;
  }
  return average;
};
module.exports = calculate_average;
