'use strict';
let Song = require("../main/main.js");

describe("beer songs",function(){
    it("bigger more than one",function(){
        let number = 99;
        let str = Song(number);
        expect(str).toEqual("99 bottles of beer on the wall, 99 bottles of beer.\n" +
            "Take one down and pass it around, 98 bottles of beer on the wall.");
    });

    it("equal one",function(){
        let number = 1;
        let str = Song(number);
        expect(str).toEqual("1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    })
});
