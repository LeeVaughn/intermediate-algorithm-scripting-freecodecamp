// freeCodeCamp Intermediate Algorithm Scripting Challenge #1 //
// https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range //

// Sum All Numbers in a Range //
// We'll pass you an array of two numbers. //
// Return the sum of those two numbers and all numbers between them. //
function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);

// Solution //
function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);

// Solution //
function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);

// Solution //
function sumAll(arr) {
    var low = Math.min.apply(Math, arr);
    var high = Math.max.apply(Math, arr);
    var total = 0;

    for (var i = low; i <= high; i++) {
        total += i;
    }
    return total;
}

sumAll([1, 4]);

// This was my original solution but the fCC interface was showing an error icon for the ES6 syntax //
// so I came up with a slightly different solution. //
// Turns out it would have accepted the ES6 syntax after all. //
function sumAll(arr) {
    var low = Math.min(...arr);
    var high = Math.max(...arr);
    var total = 0;

    for (var i = low; i <= high; i++) {
        total += i;
    }
    return total;
}

sumAll([1, 4]);
