'use strict';
var calculate_median = function (collection) {
  var len = collection.length;
  if (len % 2 === 1) {
    return collection[(len - 1) / 2];
  } else {
    return Math.ceil((collection[len / 2 - 1] + collection[(len) / 2]) / 2);
  }
}
module.exports = calculate_median;

