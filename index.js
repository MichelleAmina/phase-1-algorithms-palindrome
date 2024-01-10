//write a function that returns true if a word is a palindrome, that is the same when spelt forward and reverse and false if it's not a palidrome 

/* test cases
mom === mom  // true 
dad === dad // true
cat === tac //false 
*/

function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('')
  if (reverseWord === word){
    return true;
  }
  return false; 
}



/* 
  Add your pseudocode here
  if a word is a palindrome it returns true else it returns false 
  
  1.reverse the input 
  2.compare the newly reversed input with the original input 
  3.if palidnrome, return ture 
  4. else, return false 
*/

/*
  Add written explanation of your solution here
  Create a variable reverseWord. 
  The split() method divides the string into an array of characters, reverse() reverses the array, and join() combines the reversed characters into a new string, effectively reversing the original string.
  Assign the value of the reversed string to reverseWord.
  If reverseWord is equals to word i.e a palindrome, return true, if it's not, return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("123"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("refer"));

}

module.exports = isPalindrome;
