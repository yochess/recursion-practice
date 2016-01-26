/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {

};
  //create an object with keys as numeric numbers and values as corresponding strings
  var numConversions = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  //create variable called result, set equal to the second parameter to the fn or empty string

  //basecase: if length of string is 0
    //return result
  //if letter is a property in numConversions
    //add value of the property to result
  //else letter to new string
  //iterate to next letter of string by making a recursive call with the string with the first letter sliced off and passing in the result so far as the second parameter

  var result = arguments[1] || '';
  if(string.length === 0) {
    return result;
  } else {
    var currentChar = string.charAt(0);
    var newChar = '';
    if(numConversions.hasOwnProperty(currentChar)) {
      newChar = numConversions[currentChar];
    } else {
      newChar = currentChar;
    }
    return numToLetters(string.slice(1), result.concat(newChar));
  }
}

function numToLetters (string) {
  //create an object with keys as numeric numbers and values as corresponding strings
  var numConversions = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };

  var result = '';

  function createNewString (string) {
    if(string.length === 0) {
      return result;
    } else {
      var currentChar = string.charAt(0);
      if(numConversions.hasOwnProperty(currentChar)) {
        result = result.concat(numConversions[currentChar]);
      } else {
        result = result.concat(currentChar);
      }
      return createNewString(string.slice(1));
    }
  }

  return createNewString(string);

  // return result;

}



debug(numToLetters('I have 5 dogs and 9 cats'));
