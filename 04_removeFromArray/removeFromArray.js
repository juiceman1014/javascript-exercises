//General: make a function that takes an array and removes a certain element of that array.
//parameters: array, element to be removed
//specific: iterate through the array and if an element matches the one we're searching for. remove it.
//1.for loop that checks each element of an array
//2.if element matches condition, remove it

const removeFromArray = function(array, ...elementsRemoved) {
return array.filter(item => !elementsRemoved.includes(item))}

// Do not edit below this line
module.exports = removeFromArray;


