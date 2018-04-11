'use strict';
function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection.length;) {
    let count = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }

    var elem = collection[i].split("-");
    if (elem.length > 1) {
      result.push({
        key: elem[0],
        count: Number(elem[1])
      })
    } else {
      result.push({
        key: collection[i],
        count: count
      })
    }
    i += count;
  }


  return result;

}

module.exports = count_same_elements;
