// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
   return character + reversed;
  }, "");
}

reverse("shahzaib");
module.exports = reverse;

// first solution
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// second solution
// function reverse(str) {
//     let reversed = "";

//     for (const character of str) {
//       reversed = character + reversed;
//     }

//     return reversed;
//   }
