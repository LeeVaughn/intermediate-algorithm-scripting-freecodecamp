// freeCodeCamp Intermediate Algorithm Scripting Challenge #14
// https://www.freecodecamp.org/challenges/sum-all-primes

// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
    return num;
}

sumPrimes(10);

// Solution
function sumPrimes(num) {
    var primeArray = [];

    for (var i = 2; i <= num; i++) {
        for (var j = 2; j <= i; j++) {
            if (i === j) {
                primeArray.push(i)
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return primeArray.reduce(function (x, y) {return x + y});
}

sumPrimes(10);