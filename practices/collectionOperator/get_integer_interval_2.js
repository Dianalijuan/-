'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if (number_a === number_b) {
    if (number_a % 2 === 0) {
      result.push(number_a);
    }
    else {
      result.push();
    }
  }
  else {
    var min = number_a < number_b ? number_a : number_b;
    var max = number_a > number_b ? number_a : number_b;

    if (min === number_a) {
      if (min % 2 === 0) {
        result.push(min);
      } else {
        result.push(min + 1);
      }
      for (var i = result[0] + 2; i <= max; i += 2) {
        result.push(i);
      }
    } else if (max === number_a) {
      if (max % 2 === 0) {
        result.push(max);
      } else {
        result.push(max - 1);
      }
      for (var i = result[0] - 2; i >= min; i -= 2) {
        result.push(i);
      }
    }
  }
  return result;
}
module.exports = get_integer_interval_2;
