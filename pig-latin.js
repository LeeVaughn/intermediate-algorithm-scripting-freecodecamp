// freeCodeCamp Intermediate Algorithm Scripting Challenge #6
// https://www.freecodecamp.org/challenges/pig-latin

// Pig Latin
// Translate the provided string to pig latin
function translatePigLatin(str) {
    return str;
}

translatePigLatin("consonant");

// Solution
function translatePigLatin(str) {
    var index = str.search(/[aeiou]/);

    if (index === 0) {
        return str + "way";
    } else {
        return str.slice(index) + str.substr(0, index - 0) + "ay";
    }
}

translatePigLatin("consonant");