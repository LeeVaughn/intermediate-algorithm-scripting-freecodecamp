// freeCodeCamp Intermediate Algorithm Scripting Challenge #8
// https://www.freecodecamp.org/challenges/missing-letters

// Missing Letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    return str;
}

fearNotLetter("abce");

// Solution
function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    str = str.split("");

    if (str[0] != "a") {
        return undefined;
    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] != alphabet[i]) {
            return alphabet[i];
        }
    }
}

fearNotLetter("abce");