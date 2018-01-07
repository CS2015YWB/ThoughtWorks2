'use strict';

function get_letter_interval(number_a, number_b) {
    let result = [], j = 0, result1 = [];
    let arr = [], n= 0;
    for(let i=97;i<=122;i++)
        arr[n++] = String.fromCharCode(i);
    for(let i=97;i<=122;i++)
        for(let k=97;k<=122;k++)
            arr[n++] = String.fromCharCode(i)+String.fromCharCode(k);
    if(number_a < number_b)
        for(let k = number_a; k<=number_b; k++)
            result[j++] = k;
    if(number_a > number_b)
        for(let p = number_a; p>=number_b; p--)
            result[j++] = p;
    if(number_a === number_b)
        result[0] = number_a;
    for(let q=0; q<result.length; q++)
        result1.push(arr[result[q]-1]);
    return result1;
}

module.exports = get_letter_interval;
