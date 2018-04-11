'use strict';

function get_union(collection_a, collection_b) {

//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
  var collection_c = [];

  var result = collection_a.concat(collection_b);

  for (var i = 0; i < result.length; i++) {

    if (collection_c.indexOf(result[i]) === -1) {

      collection_c.push(result[i]);

    }
  }
  return collection_c;
}

module.exports = get_union;

