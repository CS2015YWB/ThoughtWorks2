'use strict';
let even_asc_odd_desc = function(collection){
    let arr1 = [], arr2 = [], result = [];
    for(let i in collection) {
        if(collection[i]%2==0)
            arr1.push(collection[i]);
        else
            arr2.push(collection[i]);
    }
    arr1.sort(function(a,b){
        return a-b;});
    arr2.sort(function(a,b){
        return b-a;});
    result = arr1.concat(arr2);
    return result;
};
module.exports = even_asc_odd_desc;
