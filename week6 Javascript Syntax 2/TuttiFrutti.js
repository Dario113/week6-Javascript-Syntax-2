let totalVowels = 0;
let totalConsonants = 0;
let totalLetters = 0;
let check;
arr = [
  "Apple",
  "Orange",
  "Banana",
  "Pear",
  "Peach",
  "Strawberry",
  "Cherry",
  "Acai",
];

for (let fruit of arr) {
  check = false;//if check remain false, the first letter is a consonant
  let uppercase = 0;
  let vowels = 0;
  let consonants = 0;
  console.log("---------------------------------------");
  for (let i = 0; i < fruit.length; i++) {
    switch (fruit.charAt(i)) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        totalVowels++;
        vowels++;
        break;
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        check = true;
        vowels++;
        uppercase++;
        totalVowels++;
        break;
      default:
        totalConsonants++;
        consonants++;
        break;
    }
    totalLetters++;
  }
  /*in the next if-else, i decide which sentence to print.
   inside if/else there is a switch that check if the consonant/vowels are 1 and therefore print the right sentence with the correct grammar.
   the default is for the case that the consonant/vowels are more than 1
   */

  // if check is true means that the first letter is a vowel so the sentence must start with `an`
  if (check == true) {
    switch (true) {
      case consonants == 1:
        console.log(
          `An ${fruit} has ${vowels} vowels and ${consonants} consonant`
        );
        break;

      case vowels == 1:
        console.log(
          `An ${fruit} has ${vowels} vowel and ${consonants} consonants`
        );
        break;

      default:
        console.log(
          `An ${fruit} has ${vowels} vowels and ${consonants} consonants`
        );
    }
  } else {
    switch (true) {
      case consonants == 1:
        console.log(
          `A ${fruit} has ${vowels} vowels and ${consonants} consonant`
        );
        break;

      case vowels == 1:
        console.log(
          `A ${fruit} has ${vowels} vowel and ${consonants} consonants`
        );
        break;

      default:
        console.log(
          `A ${fruit} has ${vowels} vowels and ${consonants} consonants`
        );
    }
  }
  consonants = 0;
  vowels = 0;
}
console.log("////////////////////////////////////////");
console.log(
`           TOTAL
Letters:    ${totalLetters}
Vowels:     ${totalVowels} 
Consonants: ${totalConsonants}`);
