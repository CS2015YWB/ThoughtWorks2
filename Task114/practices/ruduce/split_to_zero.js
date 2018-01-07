'use strict';

function spilt_to_zero(number, interval) {
  let result = [], num = number;
  while(1){
      result.push(num);
      if(num <= 0)
          break;
      number = number - interval;
      num = Math.round(number*10)/10;
  
  }
  return result;
}

module.exports = spilt_to_zero;
