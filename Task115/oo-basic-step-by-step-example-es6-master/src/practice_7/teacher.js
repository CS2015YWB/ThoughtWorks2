'use strict';
import Person from "./person.js";

class Teacher extends Person{
    constructor(name, age, klass) {
        super(name,age);
        this.klass = klass;
    }

    introduce() {
        let s = this.basic_introduce() + " I am a Teacher. I teach ";
        if(!this.klass){
            return s+"No Class.";
        }
        return s + "Class " + this.klass.number + ".";
    }

    introduceWith(student){
        let str = this.basic_introduce() + " I am a Teacher. ";
        if(this.klass === student.klass){
            return str + "I teach " + student.name + ".";
        } else {
            return str + "I don't teach " + student.name + ".";
        }
    }
}

export default Teacher;