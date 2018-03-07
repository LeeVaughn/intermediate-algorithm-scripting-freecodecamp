// freeCodeCamp Intermediate Algorithm Scripting Challenge #21
// https://www.freecodecamp.org/challenges/arguments-optional

// Arguments Optional
// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
    return false;
}

addTogether(2, 3);

// Solution
function addTogether() {
    var check = function (num) {
        // uses conditional operator to check if arguments is a number, returns num if true and undefined if false
        return typeof num === "number" ? num : undefined;
    };
    var a = check(arguments[0]);
    var b = check(arguments[1]);

    if (arguments.length === 2) {
        // if a and b are both true return a + b, if false return undefined
        return a && b ? a + b : undefined;
    } else {
        // if a is true
        if (a) {
            // returning a function looking for the next argument
            return function (nextArg) {
                // if a and next Arg are both true return a + nextArg, if false return undefined
                return a && check(nextArg) ? a + nextArg : undefined;
            };
        }
    }
}

addTogether(2, 3);