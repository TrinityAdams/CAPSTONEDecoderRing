// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!input) return false;
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      let alph = alphabet[i]
      if (alphabet.indexOf(alph) !== alphabet.lastIndexOf(alph)) {
        return false;
      }
    }
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowered = input.toLowerCase();
    let message = "";
  if (encode) {
    for (let letter of lowered) {
      if (trueAlphabet.includes(letter)) {
       let letterIndex = trueAlphabet.indexOf(letter);
      // aToZ.split('').forEach((letter,index)->{})
        message += alphabet[letterIndex];
      } else {
        if (letter === " " ) {
          message += letter;
        }
      }
    }
  }
  if (!encode){
      for (let letter of lowered){
        if(alphabet.includes(letter)){
          let letterIndex = alphabet.indexOf(letter);
          message += trueAlphabet[letterIndex];
        }else{
          if (letter === " "){
            message += letter;
          }
        }
     }
  }
      return message;
    }
    

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
