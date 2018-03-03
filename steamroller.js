// freeCodeCamp Intermediate Algorithm Scripting Challenge #18
// https://www.freecodecamp.org/challenges/steamroller

// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

dropElements([1, 2, 3], function (n) { return n < 3; });

// Solution
function steamrollArray(arr) {
    // I'm a steamroller, baby
    // creates new array to push values to
    var rolled = [];

    // runs arr argument through a new function
    function flatten(arr) {
        //runs each item in the arr through a loop
        arr.forEach(function (item) {
            // tests to see if item is not an array
            if (!Array.isArray(item)) {
                // if item is not an array, push it to rolled variable
                rolled.push(item);
            } else {
                // if the item is an array, it takes that item and runs it back through the flatten loop
                flatten(item);
            }
        });
    }
    // calls the function
    flatten(arr);

    return rolled;
}

steamrollArray([1, [2], [3, [[4]]]]);