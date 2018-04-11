'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  for (let i = 0; i < collection.length; i++) {

    var max = collection[0];

    if (collection[i] > max) {

      max = collection[i];
    }
  }
  return max;
}

module.exports = collect_max_number;
