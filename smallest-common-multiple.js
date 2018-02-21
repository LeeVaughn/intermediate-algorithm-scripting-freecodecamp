// freeCodeCamp Intermediate Algorithm Scripting Challenge #15
// https://www.freecodecamp.org/challenges/smallest-common-multiple

// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
    return arr;
}


smallestCommons([1, 5]);

// Solution
function smallestCommons(arr) {
    // sorts arr from highest to lowest
    arr.sort(function (a, b) {return b - a});
    var arrRange = [];

    for (var i = arr[0]; i >= arr[1]; i--) {
        // pushes all of the numbers between arr[0] and arr[1] to arrRange
        arrRange.push(i);
    }
    var lcm = 0;
    var loop = 1;
    var j;

    do {
        // multiplies the first number in arrRange times loop times the second number in arrRange
        lcm = arrRange[0] * loop * arrRange[1];
        for (j = 2; j < arrRange.length; j++) {
            // checks to see if lcm divides evenly with each number in arrRange
            if (lcm % arrRange[j] !== 0) {
                // breaks the loop if lcm doesn't divide evenly
                break;
            }
        }
        // adds 1 to loop variable and then reruns do/while loop
        loop++
    } while (j !== arrRange.length);
    return lcm;
}

smallestCommons([1, 5]);