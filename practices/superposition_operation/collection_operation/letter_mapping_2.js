'use strict';

function average_to_letter(collection) {

  var average = 0;
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
    average = sum / collection.length;
    Math.ceil(average);
    average = String.fromCharCode(97 + parseInt(average));
  }
  return average;
}

module.exports = average_to_letter;

