//General: function that can tell if the given year is a leap year
//Parameters: year
//specific
//conditions of a leap year: divisible by 4. years divisible by 100
//are not leap years, unless they're divisible by 400 years


const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0){
        return true;
    } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
        return true;
    }else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
        return false;
    } else{
        return false;
    }

   //possibilities:
   //leap year is divisible by 4, but not by 100 or 400, which is true
   //leap year is divisible by 4 and by 100 and 400, which is true
   //leap year is divisible by 4 and by 100, but not 100, which is false
};

// Do not edit below this line
module.exports = leapYears;
