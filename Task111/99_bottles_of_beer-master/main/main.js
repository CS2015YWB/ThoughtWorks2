'use strict';

module.exports = function Song(number){
    if(number<100 && number>1)
    {
        let str = number.toString();
        let str1 = (number - 1).toString();
        return str + " bottles of beer on the wall, " + str + " bottles of beer.\n" + 
            "Take one down and pass it around, " + str1 + " bottles of beer on the wall.";
    } else {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
};