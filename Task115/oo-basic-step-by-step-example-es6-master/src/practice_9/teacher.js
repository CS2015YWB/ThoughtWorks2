"use strict";
import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let str = this.basic_introduce() + " I am a Teacher.";
        if (!this.klass) {
            return str + " I teach No Class.";
        } else {
            return str + " I teach Class " + this.klass.klss + ".";
        }
    }
}

export default Teacher;