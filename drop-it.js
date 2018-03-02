// freeCodeCamp Intermediate Algorithm Scripting Challenge #17
// https://www.freecodecamp.org/challenges/drop-it

// Drop It
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
function dropElements(arr, func) {
    // Drop them elements.
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });

// Solution
function dropElements(arr, func) {
    // Drop them elements.
    // create variable for arr.length as .shift will change this in the loop
    var times = arr.length;

    for (var i = 0; i < times; i++) {
        // checks to see if func returns true
        if (func(arr[0])) {
            break;
        } else {
            // removes the first remaining element in arr
            arr.shift();
        }
    }
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });