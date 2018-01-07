"use strict";

class Class{
    constructor(num){
        this.klss = num;
        this.number = num;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(student.id === 1){
            student.id = 0;
        }

        if(student.klass.klss === this.klss){
            this.leader = student;
        } else {
            console.log("It is not one of us.");
        }
    }
    
    appendMember(student){
        student.klass = this;
    }
}

export default Class;
