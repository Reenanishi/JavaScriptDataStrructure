const dictionary = { //Creating a Dictionary (Object)
    apple: "a red color sweet fruit",
    mango: "a yellow color sweet fruit",
    cherry:" a tiny red color sweet fruit",
    banana: "a yellow, curved fruit",

};
// console.log(dictionary); 

const descriptionOfBanana = dictionary.banana; //Accessing Values in the Dictionary
console.log("Banana : "+ descriptionOfBanana);

dictionary.apple = "a delicious and juicy fruit"; //Modifying Values in the Dictionary
console.log("Apple : "+dictionary.apple);

dictionary.orange = "a round, citrus fruit with a peel"; //Adding a New Key-Value Pair

const doesExist = dictionary.hasOwnProperty("cherry"); //Checking for Key Existence
console.log(doesExist);  // Output: true

for (const fruit in dictionary) {
    if (dictionary.hasOwnProperty(fruit)) {
      const description = dictionary[fruit];
      console.log(`${fruit}: ${description}`);
    }
  }



