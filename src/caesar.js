// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
//when decoding the message, neeed to know the number the original message was shifted by to shift in opposit direction
//has three params 
//input - refers to the inputted text to be encoded or decoded
//shift - refers to how much eiach letter is shifted by + = to the right - = to the left
//encode - refers to whether you should encode or decode the message - default set to true
//if shift isn't present equal to 0, less than -25, or greater than 25, function should return false
//spaces should be maintained throughout as should other nonalphabetic symbols
//capital letters can be ignored.
//if a letter is shifted that it goes "off" the alphabet, should wrap around to the front of the alphabet
//Writing a series of unit tests using Mocha and Chai
//Using different expect() methods to test your code

function caesar(input, shift, encode = true) {
  let results = "";
  if (shift < -25 || shift === 0 || shift > 25) return false; //parameters that should cause the function to return a value of "false"
  if (encode === false) shift = shift * -1; //inverses shift when decoding
  for (let i = 0; i < input.length; i++) {
    let lowered = input[i].toLowerCase()
    let asciiNum = lowered.charCodeAt();  //looping through the string and converting each alphabetical value to it's corresponding asciiNum
    if (asciiNum < 97 || asciiNum > 122) {
       results += String.fromCharCode(asciiNum); //if there is a character (like a space) in the origional string, this will keep it in our returned response
     }
     let shifted = asciiNum + shift//applies the shift
    if (shifted < 97) {
      shifted += 26 //throws input back in to relevant ascii num to return a value 
    }
    if (shifted > 122) {
      shifted -= 26 //throws input back in to relevant ascii num to return a value
    }
    if (shifted >= 97 && shifted <= 122) {
      results += String.fromCharCode(shifted); //returning ascinums to their string counterpart
    }
  }
  console.log(results)
  return results; //final result
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
