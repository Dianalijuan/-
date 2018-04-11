'use strict';

function hybrid_operation_to_uneven(collection) {

  var colleciton_a = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      colleciton_a.push(collection[i] * 3 + 2);
    }
  }
  return colleciton_a;
}

module.exports = hybrid_operation_to_uneven;

