'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if (number_a === number_b) {
    result.push(number_a);
  }
  else {
    var min = number_a < number_b ? number_a : number_b;
    var max = number_a > number_b ? number_a : number_b;
    if (min === number_a) {
      result.push(min);
      for (var i = result[0] + 1; i <= max; i++) {
        result.push(i);
      }
    }
    else if (max === number_a) {
      result.push(max);
      for (var i = result[0] - 1; i >= min; i--) {
        result.push(i);
      }
    }
  }
  return result;
}
module.exports = get_integer_interval;

