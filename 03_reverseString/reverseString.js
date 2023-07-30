//General: take a string and then reverse it;
//index starts at the end of the string and then after each iteration, a letter is printed to the output
//Paramters: string
//specifics



const reverseString = function(text) {
    myArray = text.split("");
    let myString = "";

    for(let i = myArray.length - 1; i > -1; i--){
        myString = myString + myArray[i];
    }

    return myString;

};

// Do not edit below this line
module.exports = reverseString;
