// freeCodeCamp Intermediate Algorithm Scripting Challenge #13
// https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers

// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {
    return num;
}

sumFibs(4);

// Solution
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var sumOdd = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            sumOdd += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return sumOdd;
}

sumFibs(4);