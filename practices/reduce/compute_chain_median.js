'use strict';

function compute_chain_median(chain) {

  var collection = chain.split('->').sort(function (a, b) {
    return a - b;
  })
  var lowMiddle = Math.floor((collection.length - 1) / 2);
  var highMiddle = Math.ceil((collection.length - 1) / 2);
  return (Number(collection[lowMiddle]) + Number(collection[highMiddle])) / 2;
}

module.exports = compute_chain_median;
