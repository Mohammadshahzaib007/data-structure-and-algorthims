// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const arr = parseInt(n.toString().split("").reverse().join(""));
  return arr * Math.sign(n);
}

reverseInt(89);
module.exports = reverseInt;
