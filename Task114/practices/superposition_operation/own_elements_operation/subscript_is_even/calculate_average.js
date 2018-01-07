'use strict';
let calculate_average = function(collection){
    let result = 0, k = 0;
    for(let i=1; i<collection.length; i=i+2){
        result += collection[i];
        k++;
    }
    return result/k;
}
module.exports = calculate_average;
