// freeCodeCamp Intermediate Algorithm Scripting Challenge #11
// https://www.freecodecamp.org/challenges/convert-html-entities

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string
// to their corresponding HTML entities.
function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");

// Solution
function convertHTML(str) {
  // &colon;&rpar;
  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;').replace(/'/g, "&apos;");
  return str;
}

convertHTML("Dolce & Gabbana");