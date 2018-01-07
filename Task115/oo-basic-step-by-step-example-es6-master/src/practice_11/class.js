"use strict";

class Class{
    constructor(num){
        this.klss = num;
        this.number = num;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    registerJoinListener(teacher){
        this.teacher1 = teacher;
    }

    registerAssignLeaderListener(teacher){
        this.teacher2 = teacher;
    }

    assignLeader(student){
        if(student.id === 1){
            student.id = 0;
        }

        if(student.klass.klss === this.klss){
            this.leader = student;
        }
        
        if(this.teacher2){
            console.log("I am " + this.teacher2.name + ". I know " + student.name + " become Leader of Class " + this.klss + ".");
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass = this;
        if(this.teacher1){
          console.log("I am " + this.teacher1.name + ". I know " + student.name + " has joined Class " + this.klss + ".");
        }
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

