'use strict';
var even_group_calculate_average = function (collection) {
  var result = [];
  var result_a = [];
  var result_b = [];
  var result_c = [];
  var result_avg = [];
  var sum_a = 0;
  var sum_b = 0;
  var sum_c = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      if (collection[i] % 2 === 0) {
        result.push(collection[i]);
      }
    }
  }

  if (result.length > 0) {
    for (var j = 0; j < result.length; j++) {
      if (result[j] / 10 < 1) {
        result_a.push(result[j]);
        sum_a += result[j];
      } else if (result[j] / 10 >= 1 && result[j] / 10 < 10) {
        result_b.push(result[j]);
        sum_b += result[j];
      } else {
        result_c.push(result[j]);
        sum_c += result[j];
      }
    }

    if (result_a.length === 0 && result_b.length === 0) {
      result_avg.push(sum_c / result_c.length);
      return result_avg;
    }

    result_avg.push(sum_a / result_a.length);
    result_avg.push(sum_b / result_b.length);
    result_avg.push(sum_c / result_c.length);
    return result_avg;
  } else {
    return [0];
  }


};
module.exports = even_group_calculate_average;
