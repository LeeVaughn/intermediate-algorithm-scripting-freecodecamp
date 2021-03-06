// freeCodeCamp Intermediate Algorithm Scripting Challenge #4 //
// https://www.freecodecamp.org/challenges/wherefore-art-thou //

// Wherefore Art Thou //
// Make a function that looks through an array of objects (first argument) //
// and returns an array of all objects that have matching property and value pairs (second argument). //
// Each property and value pair of the source object has to be present in the object //
// from the collection if it is to be included in the returned array. //
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line


    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Solution //
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(function (item) {
        for (var i in source) {
            if (source[i] != item[i]) {
                return false;
            }
        }
        return true;
    });
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });