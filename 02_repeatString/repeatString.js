//General: create a function that takes two arguments, a string and a number, and will repeat
//the string the given number of times
//Parameters: string, num
//Specific:
//1. for i that's less than the given number
    //1. display the string


const repeatString = function(input, num) {

    let text = "";

    if (num < 0){
        return "ERROR";
    }

    for (let i = 0; i < num; i++){
        text = text + input;
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
