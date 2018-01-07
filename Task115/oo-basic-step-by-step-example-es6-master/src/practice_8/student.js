"use strict";
import Person from "./person.js";

class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let str = this.basic_introduce();
        if(this.id === 0){
            return str + " I am a Student. I am Leader of Class 2.";
        }
        return str + " I am a Student. I am at Class " + this.klass.klss + ".";
    }
}

export default Student;