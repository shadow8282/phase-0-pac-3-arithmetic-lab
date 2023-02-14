//let numTimesRun = 0;

function add(num1,num2){
    return num1 + num2;
};
function subtract(num1,num2){
    return num1 - num2;
};
function multiply(num1,num2){
    return num1 * num2;
};
function divide(num1,num2){
    return num1 / num2;
};
function increment(num){
    return ++num;
};
function decrement(num){
    return --num;
};
function makeInt(num){
    console.log(typeof num);
   num = parseInt(num, 10);
   console.log(typeof num);
   //debugger;
    if (num === NaN){
        //console.log(`-Top- Times run:${++numTimesRun} Num:${num}`);
        return true;
    }
    else if (typeof num === "string") {
        return 0;
    } 
    else
    {
       // console.log(`-Bottom- Times run:${++numTimesRun} Num:${num}`);
        return num;
    };

};
function preserveDecimal(num){

    num = parseFloat(num);
    
    if (num === NaN){
        return true;
    }
    else
    {
        return num;
    };

};

makeInt("2");
makeInt("0x2328");
makeInt("fasdfasjdhf");