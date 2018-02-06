// freeCodeCamp Intermediate Algorithm Scripting Challenge #3 //
// https://www.freecodecamp.org/challenges/roman-numeral-converter //

// Roman Numeral Converter //
// Convert the given number to a roman numeral //
function convertToRoman(num) {
    return num;
}

convertToRoman(36);

// Solution //
function convertToRoman(num) {
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var regularNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var converted = "";

    for (var i = 0; i < regularNumber.length; i++) {
        while (regularNumber[i] <= num) {
            converted += romanNumeral[i];
            num -= regularNumber[i];
        }
    }
    return converted;
}

convertToRoman(36);