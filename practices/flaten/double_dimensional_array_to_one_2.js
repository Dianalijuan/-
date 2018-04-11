'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_b = [];

  var collection_a = [].concat.apply([], collection);

  for (var i = 0; i < collection_a.length; i++) {

    if (collection_b.indexOf(collection_a[i]) === -1) {

      collection_b.push(collection_a[i]);

    }

  }
  return collection_b;
}

module.exports = double_to_one;
