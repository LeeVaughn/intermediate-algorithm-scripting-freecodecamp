// freeCodeCamp Intermediate Algorithm Scripting Challenge #16
// https://www.freecodecamp.org/challenges/finders-keepers

// Finders Keepers
// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
    var num = 0;
    return num;
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });

// Solution
// This was the first working solution I came up with
function findElement(arr, func) {
    //creates an undefined variable named num
    var num;

    for (var i = 0; i < arr.length; i++) {
        // loops through arr to find the first number that is divisible by 2, assigns that number to num and returns it
        if (arr[i] % 2 === 0) {
            num = arr[i];
            return num;
            break;
        }
    }
    // returns the undefined varaiable if the for loop never returns true
    return num
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });

// I thought about something like this when I first read about .filter but it seemed to easy
// so I tried the above method first.
function findElement(arr, func) {
    // creates a new variable by filtering arr by the func
    var arrFilter = arr.filter(func);
    
    // returns the first element that returns true or undefined if nothing returns true
    return arrFilter[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });