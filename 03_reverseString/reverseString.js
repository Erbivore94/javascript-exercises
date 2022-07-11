const reverseString = function(text) {
  array = text.split("");
  reverse = array.reverse();
  join = reverse.join();
  noComma = join.replace(/,/g, ""); //g for "global," capturing all commas
  return noComma;
}
console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
