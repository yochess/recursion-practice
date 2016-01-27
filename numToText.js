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
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
  };

  var numToWord = function(num) {
    if(lookupTable[num]) {
      return lookupTable[num];
    }
  };

  var words = str.split(" ");
  words.forEach(function(wordOrNum, index) {
    if(!isNaN(wordOrNum)) {
      words[index] = numToWord(wordOrNum);
    }
  });

  return words.join(" ");
};
