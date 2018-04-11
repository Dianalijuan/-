'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  var colletion = [''];
  for (var i = 97; i < 102; i++) {
    colletion.push(String.fromCharCode(i));
  }
  if (number_a === number_b) {
    result.push(colletion[number_a]);
  } else {
    var min = number_a < number_b ? number_a : number_b;
    var max = number_a > number_b ? number_a : number_b;
    if (min === number_a) {
      for (var i = min; i <= max; i++) {
        result.push(colletion[i]);
      }
    } else {
      for (var i = max; i >= min; i--) {
        result.push(colletion[i]);
      }
    }
  }
  return result;
}

module.exports = get_letter_interval;
