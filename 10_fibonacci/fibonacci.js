const fibonacci = function(fibNumber) {


    const fibSequence = [0,1]

    if(isNaN(fibNumber) == true){
        fibNumber = Number(fibNumber);
    }

    if(fibNumber < 1){
        return "OOPS"
    }

    for(let i = 2; i < fibNumber +  1; i++){
        const nextFib = fibSequence[i-1] + fibSequence[i-2];
        fibSequence.push(nextFib);
    }
    
    return fibSequence[fibNumber];



};

// Do not edit below this line
module.exports = fibonacci;
