// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const strArr = str.split(' ');
    const capitalizedStr = []
   for(let el of strArr) {
     capitalizedStr.push( el[0].toUpperCase() + el.slice(1));
   }
     
   return capitalizedStr.join(' ')
}

module.exports = capitalize;
