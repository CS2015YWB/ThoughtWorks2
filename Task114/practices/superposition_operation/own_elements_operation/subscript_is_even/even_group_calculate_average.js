'use strict';
let even_group_calculate_average = function(collection){
    let result = [], result1 = [], result2 = [], flag = [];
    let m=0,n=0,p=0;
    for(let a=0; a<3; a++)
        flag[a] = 0;
    for(let i=1; i<collection.length; i=i+2){
        result1.push(collection[i]);
    }
    for(let j=0; j<result1.length; j++)
        if(result1[j]%2 == 0)
            result2.push(result1[j]);
    if(result2.length == 0)
        return [0];
    else{
        for(let k=0; k<result2.length; k++){
            if(result2[k]>=0 && result2[k]<10){
                m+=result2[k];
                flag[0]++;
            }
            if(result2[k]>=10 && result2[k]<100){
                n+=result2[k];
                flag[1]++;
            }
            if(result2[k]>=100 && result2[k]<1000){
                p+=result2[k];
                flag[2]++;
            }
        }
        if(flag[0]>0)
            result.push(m/flag[0]);
        if(flag[1]>0)
            result.push(n/flag[1]);
        if(flag[2]>0)
            result.push(p/flag[2]);
        return result;
    }
    
};
module.exports = even_group_calculate_average;
