'use strict';
function numToChar(num) {
  let remainder = num % 26;
  let quotient = parseInt(num / 26);

  if (quotient === 0) {
    //当商为0时，即 0 <= num < 26
    return String.fromCharCode(remainder + 96)
  } else if (quotient === 1 && remainder === 0) {
    //当商1，模0时，即num = 26
    return 'z';
  } else if (quotient > 1 && remainder === 0) {
    //商大于1，模为0 时，即num是26的倍数的数
    return numToChar(quotient - 1) + 'z';
  } else {
    //商大于1，模不为0时
    return numToChar(quotient) + String.fromCharCode(remainder + 96);
  }
}

function createArr(num_1, num_2) {
  let arr = [];
  if (num_1 < num_2) {
    for (let i = num_1; i <= num_2; i++) {
      arr.push(numToChar(i))
    }
  } else if (num_1 > num_2) {
    for (let i = num_1; i >= num_2; i--) {
      arr.push(numToChar(i))
    }
  }
  return arr;
}

function get_letter_interval_2(number_a, number_b) {
  if (number_a === number_b) {
    return [numToChar(number_a)]
  } else {
    return createArr(number_a, number_b)
  }
}


module.exports = get_letter_interval_2;

