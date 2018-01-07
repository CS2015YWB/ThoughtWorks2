'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  let j = 0;
  if(number_a < number_b)
    for(let i = number_a; i<=number_b; i++)
      result[j++] = i;
  if(number_a > number_b)
    for(let k = number_a; k>=number_b; k--)
      result[j++] = k;
  if(number_a === number_b)
    result[0] = number_a;
  return result;
}
module.exports = get_integer_interval;

