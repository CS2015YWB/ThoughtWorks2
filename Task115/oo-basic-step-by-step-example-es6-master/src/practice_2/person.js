"use strict";

class Person {
    constructor(name, age, classes) {
        this.name = name;
        this.age = age;
        this.class = classes;
      }

      introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
      }
}

export default Person;