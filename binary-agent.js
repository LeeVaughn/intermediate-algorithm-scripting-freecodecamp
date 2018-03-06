// freeCodeCamp Intermediate Algorithm Scripting Challenge #19
// https://www.freecodecamp.org/challenges/binary-agents

// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Solution
function binaryAgent(str) {
    // splits str at each space
    var strSplit = str.split(" ");
    // creates a new array to store the translated string
    var translated = [];

    // iterates through the strSplit array
    for (var i = 0; i < strSplit.length; i++) {
        // parseInt converts the binary number to a decimal, which fromCharCode then converts to the letter equivilent
        translated.push(String.fromCharCode(parseInt(strSplit[i], 2)));
    }

    // rejoins the string and returns it
    return translated.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");