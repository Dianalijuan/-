'use strict';

function get_intersection(collection_a, collection_b) {
//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
// unshift() 方法可向数组的前面添加一个或多个元素，并返回新的长度
  var collection_c = [];
  for (var i = 0; i < collection_b.length; i++) {

    for (var j = 0; j < collection_a.length; j++) {

      if (collection_a[j] === collection_b[i]) {

        collection_c.push(collection_b[i]);
      }
    }
  }
  return collection_c;
}

module.exports = get_intersection;
