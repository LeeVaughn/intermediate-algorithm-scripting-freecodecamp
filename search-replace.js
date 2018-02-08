// freeCodeCamp Intermediate Algorithm Scripting Challenge #5
// https://www.freecodecamp.org/challenges/search-and-replace

// Search and Replace 
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Solution
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");