'use strict';
function collect_same_elements(collection_a, collection_b) {
  var colllection = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_b.toString().indexOf(collection_a[i].toString()) > -1) {
      colllection.push(collection_a[i]);
    }
  }
  return colllection;
}

module.exports = collect_same_elements;
