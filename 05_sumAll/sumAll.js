//General: take two numbers and returns the sum of them along with all the numbers between them.
//Parameters: num1, num2
//Specific: 
//1. make sure to set a sum value to num1 + num2 at the start
//2. set up a while loop. set num1 to min and num2 to max.
//3. until min is equal to max, keep adding 1 to min 
    //1. after adding the +1, add it to the sum total


const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if(typeof num1 === "string" || typeof num2 === "string"){
        return "ERROR";
    }

    if(Array.isArray(num1)|| Array.isArray(num2)) {
        return "ERROR";
    }

    let max;
    let min;
    
    if(num1 > num2){
        max = num1;
        min = num2;
    } else{
        min = num1;
        max = num2;
    }

    
    sum = min + max;
    

    while((min+1) < max){
        ++min;
        sum = sum + min;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
