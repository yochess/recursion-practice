/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit numbers.

Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

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
    var base;
    if(num*1 === 0) {
      return "";
    } else if(lookupTable[num]) {
      return lookupTable[num];
    } else if(num > 20 && num < 100) {
      var tens = Math.floor(num/10) * 10;
      rest = num - tens;
      return lookupTable[tens] + "-" + lookupTable[rest];
    } else if(num >= 100 && num < 1000) {
      base = Math.floor(num/100);
      rest = num - (base*100);
      return (lookupTable[base] + " hundred " + numToWord(rest)).trim();
    } else {
      var numString = num.toString();
      var length = numString.length;
      var bigNumIndex = Math.floor((length-1)/3) -1;
      var middleIndex = length % 3 || 3;
      base = numString.slice(0, middleIndex) *1;
      rest = numString.slice(middleIndex) *1;
      return (numToWord(base) + " " + bigNumTable[bigNumIndex] + " " + numToWord(rest)).trim();
    }
  };

  var words = str.split(" ");
  words.forEach(function(word, index) {
    if(!isNaN(word)) {
      var num = word*1;
      if(num === 0) {
        words[index] = 'zero';
      } else {
        words[index] = numToWord(num);
      }
    }
  });

  return words.join(" ");
};

console.log(numToText("99 worlds in mario 2"));
// => ninety-nine worlds in mario two

console.log(numToText("999 bottles of beer with 300 left"));
// => nine hundred ninety-nine bottles of beer with three hundred left

console.log(numToText("A car costs 43500 dollars"));
// => A car costs forty-three thousand five hundred dollars

console.log(numToText("A house costs 1234567 dollars"));
// => A house costs one million two hundred thirty-four thousand five hundred sixty-seven dollars

console.log(numToText("With 40000000500 dollars, Bill Gates can buy 32400 houses"));
// => With forty billion five hundred dollars, Bill Gates can buy thirty-two thousand four hundred houses