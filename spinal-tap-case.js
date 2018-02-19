// freeCodeCamp Intermediate Algorithm Scripting Challenge #12
// https://www.freecodecamp.org/challenges/spinal-tap-case

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str;
}

spinalCase('This Is Spinal Tap');

// Solution
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+|_+/g, "-").toLowerCase();
    return str;
}

spinalCase('This Is Spinal Tap');
