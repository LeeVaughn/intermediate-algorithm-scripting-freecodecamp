// freeCodeCamp Intermediate Algorithm Scripting Challenge #20
// https://www.freecodecamp.org/challenges/everything-be-true

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
    // Is everyone being true?
    return pre;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

// Solution
function truthCheck(collection, pre) {
    // Is everyone being true?
    // runs a for loop over the collection array
    for (var i = 0; i < collection.length; i++) {
        // loops through the collection array to see if pre is found, it not it returns false
        if (!collection[i][pre]) {
            return false;
        }
    }
    return true;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");