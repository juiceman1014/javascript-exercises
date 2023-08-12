const palindromes = function (phrase) {
    let newPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(newPhrase);
    let reversedPhrase = newPhrase.split('').reverse().join("").replace(/[^a-z0-9]/g, '');
    console.log(reversedPhrase);
    return newPhrase === reversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
