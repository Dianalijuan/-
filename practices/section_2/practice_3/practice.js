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

    if (collection[i].split("-").length > 1) {
      result.push({
        name: collection[i].split("-")[0],
        summary: Number(collection[i].split("-")[1])
      })
    } else {
      result.push({
        name: collection[i],
        summary: count
      })
    }
    i += count;
  }


  return result;

}

module.exports = count_same_elements;
