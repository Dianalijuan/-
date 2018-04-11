'use strict';

function grouping_count(collection) {

  var object = {};
  for (var i = 0; i < collection.length; i++) {
    if (!object[collection[i]]) {
      object[collection[i]] = 1;
    } else {
      object[collection[i]]++;
    }
  }
  return object;
}

module.exports = grouping_count;
