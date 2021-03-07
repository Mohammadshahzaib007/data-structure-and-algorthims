// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// for removing all the spaces, punctuation, and converting to the lowercase
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function charMap(str) {
  // removing all the space, punctuation, and converting into lowercase
  const cleanedStr = cleanString(str);

  //creating an object of strings
  const charactersMap = {};

  //looping through the string to create an object
  for (const char of cleanedStr) {
    charactersMap[char] = charactersMap[char] + 1 || 1;
  }
  return charactersMap;
}

function anagrams(stringA, stringB) {
  //creating an object of strings
  let strAChar = charMap(stringA);
  let strBChar = charMap(stringB);

  if (Object.keys(strAChar).length !== Object.keys(strBChar).length) {
    return false;
  }

  for (const char in strAChar) {
    if (strAChar[char] !== strBChar[char]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
