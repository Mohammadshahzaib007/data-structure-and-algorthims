// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  let max = 0;
  let maxChar = "";

  for (const char of str) {
    // if character is there already then add one to it's value
    if (chars[char]) {
      chars[char]++;
    } else {
      // otherwise assign that character's value 1
      chars[char] = 1;
    }
  }

  //looping through the chars which is the object of string with no of repeated words
  for (const char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
