'use strict';
import Person from "./person.js";

class Worker extends Person {
      constructor(name, age) {
        super(name,age);
      }

      introduce() {
        return this.basic_introduce() + " I am a Teacher. I have a job.";
      }
}

export default Worker;