"use strict";
import Person from "./person.js";

class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        let str = this.basic_introduce() + " I am a Teacher.";
        if(!this.klasses){
            return str + " I teach No Class.";
        }
        return str + " I teach Class " + this.klasses[0].klss + ", " + this.klasses[1].klss + ".";
    }

    isTeaching(student){
        if(this.klass.isIn(student) === true){
            return true;
        } else {
            return false;
        }
    }

}

export default Teacher;

