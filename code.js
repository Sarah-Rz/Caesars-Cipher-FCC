//Question: 
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// My Solution:
function rot13(str) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let collection = str.split("");
    let sentence = [];
  
    for (let i = 0; i < collection.length; i++) {
      let letter = letters.indexOf(collection[i]);
      if (letter === -1) {
        let partOfCollection = collection[i];
        sentence.push(partOfCollection);
      } else if (letter < 13) {
        let partOfletters = letter + 13;
        sentence.push(letters[partOfletters]);
      } else if (letter >= 13) {
        let partOfletters = letter - 13;
        sentence.push(letters[partOfletters]);
      }
    }
    return sentence.join("");
  }

//Caesars Cipher- JavaScript Algorithms and Data Structures Projects:
// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher