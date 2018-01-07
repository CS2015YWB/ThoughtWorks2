'use strict';
var cli = require('cli-interact');

//输入学生信息
function inputStuInfo(){
    let input = cli.question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");
    let Info = input.split(",");
    if(Info.length != 8){
        let input = cli.question("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n");
    } else {
        let student = {};
        let sum = 0;
        for(let i = 4; i < Info.length; i++){
            sum += parseInt(Info[i].split(":")[1]);
        }
        let average     = sum/4;
        student.name    = Info[0];
        student.id      = Info[1];
        student.nation  = Info[2];
        student.klass   = Info[3];
        student.math    = Info[4].split(":")[1];
        student.chinese = Info[5].split(":")[1];
        student.english = Info[6].split(":")[1];
        student.program = Info[7].split(":")[1];
        student.average = average;
        student.sum = sum;
        stuInfo.push(student);
        console.log("\n\n学生"+ input.split(",")[0] + "的成绩被添加\n\n");
    }
    main();  //输入完成后，返回主界面
}

//打印成绩单
function printTranscripts(){
    let input = cli.question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
    let str = input.split(",");
    let scoreList = "";
    if(isNaN(parseInt(str))){
        let input = cli.question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");

    }else{
        console.log("成绩单");
        console.log("姓名|数学|语文|英语|编程|平均分|总分 ");
        console.log("========================");
        for(let j = 0;j < stuInfo.length;j++){
            scoreList += stuInfo[j].name + "|" 
                       + stuInfo[j].math + "|" 
                       + stuInfo[j].chinese + "|" 
                       + stuInfo[j].english + "|" 
                       + stuInfo[j].program + "|" 
                       + stuInfo[j].average + "|" 
                       + stuInfo[j].sum + "\n";
            continue;
        }
    }
    console.log(scoreList);
    console.log("========================");
    console.log("全班总分平均数：");
    console.log("全班总分中位数：");
    main();    //输入完成后，返回主界面
}

function main(){
    var stuInfo = [];     //学生信息
    let select = cli.question(`1. 添加学生
    2. 生成成绩单
    3. 退出
    请输入你的选择（1～3）：`)
    switch(select){
        case '1': inputStuInfo();  //输入学生信息
            break;
        case '2': printTranscripts(); //打印成绩单
            break;
        case '3': process.exit(1); //退出
            break;
    }
}

module.exports = main;