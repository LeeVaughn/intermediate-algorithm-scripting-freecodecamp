// freeCodeCamp Intermediate Algorithm Scripting Challenge #7
// https://www.freecodecamp.org/challenges/dna-pairing

// DNA Pairing
// The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
function pairElement(str) {
    return str;
  }
  
  pairElement("GCG");

// Solution
function pairElement(str) {
  pairs = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "C") {
      pairs.push((str[i] + "G").split(""));
    } else if (str[i] === "G") {
      pairs.push((str[i] + "C").split(""));
    } else if (str[i]=== "A") {
      pairs.push((str[i] + "T").split(""));
    } else if (str[i] === "T") {
      pairs.push((str[i] + "A").split(""));
    }
  }
    return pairs;
  }
  
  pairElement("GCG");