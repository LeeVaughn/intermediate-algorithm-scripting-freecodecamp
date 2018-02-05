// freeCodeCamp Intermediate Algorithm Scripting Challenge #2 //
// https://www.freecodecamp.org/challenges/diff-two-arrays //

// Diff Two Arrays //
// Compare two arrays and return a new array //
// with any items only found in one of the two given arrays, //
// but not both.
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Solution //
function diffArray(arr1, arr2) {
    var newArr = [];
    var arrConcat = arr1.concat(arr2);

    for (var i = 0; i < arrConcat.length; i++) {
        if (arr1.indexOf(arrConcat[i]) === -1 || arr2.indexOf(arrConcat[i]) === -1) {
            newArr.push(arrConcat[i]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);