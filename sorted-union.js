// freeCodeCamp Intermediate Algorithm Scripting Challenge #10
// https://www.freecodecamp.org/challenges/sorted-union

// Sorted Union
// Write a function that takes two or more arrays and returns a new array
// of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Solution
function uniteUnique(arr) {
    var arrArray = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (arrArray.indexOf(arguments[i][j]) === -1) {
                arrArray.push(arguments[i][j]);
            }
        }
    }
    return arrArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);