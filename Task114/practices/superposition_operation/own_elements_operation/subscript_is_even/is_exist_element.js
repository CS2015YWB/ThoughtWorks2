'use strict';
let is_exist_element = function(collection,element){
    let result = [];
    for(let i=0; i<collection.length; i=i+2)
        result.push(collection[i]);
    if(result.indexOf(element) === -1)
        return false;
    else
        return true;
}
module.exports = is_exist_element;
