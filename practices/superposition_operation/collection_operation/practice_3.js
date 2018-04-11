'use strict';

function hybrid_operation_to_uneven(collection) {

  var sum = 0;
  var colllection_a = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      colllection_a.push(collection[i] * 3 + 5);
    }
  }
  for (var j = 0; j < colllection_a.length; j++) {
    sum = sum + colllection_a[j];
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

