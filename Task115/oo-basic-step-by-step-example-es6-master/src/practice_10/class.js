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
        }
        else{
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass = this;
    }

    isIn(student){
        for(let i of this.klss){
            if(student.klass === i){
                return true;
            }
        }
        return false;
    }
}

export default Class;
