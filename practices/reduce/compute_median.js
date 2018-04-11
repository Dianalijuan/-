'use strict';

function compute_median(collection) {
  collection.sort(function (a, b) {
    return a - b;

  })
  if (collection.length % 2 !== 1) {
    return (collection[collection.length / 2 - 1] + collection[(collection.length) / 2]) / 2;
  } else {
    return collection[(collection.length - 1) / 2];
  }
}

module.exports = compute_median;


