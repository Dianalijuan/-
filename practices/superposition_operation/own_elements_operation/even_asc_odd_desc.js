'use strict';
var even_asc_odd_desc = function (collection_a) {
  var collection_c = [];
  var collection_d = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] % 2 === 0) {
      collection_c.push(collection_a[i]);
      collection_c.sort(function (a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      });
    } else {
      collection_d.push(collection_a[i]);
      collection_d.sort(function (a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      });
      var reCollection_d = collection_d.reverse();
    }
    var result = collection_c.concat(reCollection_d);
  }
  return result;
};
module.exports = even_asc_odd_desc;
