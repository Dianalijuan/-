'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  for (let i = 0; i < collection.length; i++) {

    var min = collection[0];

    if (collection[i] < min) {

      min = collection[i];

    }
  }
  return min;
}

module.exports = collect_min_number;

