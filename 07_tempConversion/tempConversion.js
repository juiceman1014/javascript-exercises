//General: both functions should take a value, either celsius or fahrenheit
//Parameters: fahrenheit, celsius
//Speicifc:
//1. set up the formula
//2. put the formula's value into Math.round(num*10)/10
//3. return the rounded value


const convertToCelsius = function(fahrenheit) {
  let celsius;
  celsius = (fahrenheit - 32) * (5/9);
  let roundedCelsius = Math.round(celsius * 10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * (9/5))+32;
  let roundedFahrenheit = Math.round(fahrenheit * 10)/10;
  return roundedFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
