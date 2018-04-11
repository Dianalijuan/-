'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var result_a = [];
  if (number_a === number_b) {
    result.push(number_a);
  } else {
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
/*  for (var j = 0; j < result.length;j ++) {
    if (result[j] > 0) {
      if (result[j] >= 1 && result[j] <= 26) {
        result_a.push(String.fromCharCode(96 + parseInt(result[j])));
      } else {
        while (result[j] > 26) {
          var count = parseInt(result[j] / 26);
          var remainder = result[j] % 26;
          if (remainder === 0) {
            remainder = 26;
            count--;
            result_a.push(String.fromCharCode(96 + parseInt(remainder)));
          } else {
            result_a.push(String.fromCharCode(96 + parseInt(remainder)));
          }
        }
      }
    }
  }*/
  return result;
}

module.exports = get_letter_interval_2;

