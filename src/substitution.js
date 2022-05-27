const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //edge cases
    if (!alphabet || alphabet.length !== 26) return false;
    const alphabetTestArray = alphabet.split("");
    for (let letter of alphabetTestArray) {
      let letterCount = alphabetTestArray.filter(
        (character) => character === letter
      ).length;
      if (letterCount > 1) return false;
    }

    //mapping given alphabet to regAlphabet
    const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet;
    input = input.toLowerCase();
    const splitArray = input.split("");
    const encodedArray = [];

    function findAlphabetIndexOfCharacter(array, checkAlphabet, foundAlphabet) {
      for (let character of array) {
        if (checkAlphabet.includes(character)) {
          const foundIndex = checkAlphabet.indexOf(character);
          character = foundAlphabet[foundIndex];
        }
        encodedArray.push(character);
      }
    }

    // DECODING 
    if (!encode) {
      findAlphabetIndexOfCharacter(
        splitArray,
        substitutionAlphabet,
        regAlphabet
      );
    } else {
      // ENCODING 
      findAlphabetIndexOfCharacter(
        splitArray,
        regAlphabet,
        substitutionAlphabet
      );
    }
    return encodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };