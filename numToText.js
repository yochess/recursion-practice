/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit numbers.

Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

/* Pseudo code

LOOKUP TABLE consists of:
- numbers corresponding to the word from zero to nineteen

PROCEDURE:
split the string into an array of words
for each word, 
  if it's not a digit then return the word
  else
    if num is between 0 and 19 then return its lookup value
    ------ under construction ------
    elseif num is between 20 and 99, 
    elseif
    --------------------------------
*/


var numToText = function(str) {
	var lookupTable = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 
    15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 
    19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 
    50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
  };

  var bigNumTable = ["thousand", "million", "billion", "trillion", "zillion"];

  var numToWord = function(num) {
    var rest;
    if(num*1 === 0) {
      return "";
    } else if(lookupTable[num]) {
      return lookupTable[num];
    } else if(num > 20 && num < 100) {
      var tens = Math.floor(num/10) * 10;
      rest = num - tens;
      return lookupTable[tens] + "-" + lookupTable[rest];
    } else if(num >= 100 && num < 1000) {
      var base = Math.floor(num/100);
      rest = num - (base*100);
      return lookupTable[base] + " hundred" + numToWord(rest);
    } 
  };

  var words = str.split(" ");
  words.forEach(function(word, index) {
    if(!isNaN(word)) {
      var num = word*1;
      if(num === 0) {
        words[index] = 0;
      } else {
        words[index] = numToWord(num);
      }
    }
  });

  return words.join(" ");
};
