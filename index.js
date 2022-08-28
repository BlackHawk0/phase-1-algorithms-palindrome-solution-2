function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning of the string to the middle of the string
  for(let i = 0; i<word.length/2; i++){
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const k = word.length-1-i
    // iterating from the front starting point
    start = word[i]
    // iterating from the back starting point
    end = word[k]
    //check if elements at every index are similar
    return start !== end ? false : true
  }
  return true
}

/* 
  Add your pseudocode here
  1.Iterate through the first half of the string crossreferencing it with the elements at str.lenght-1-current index
  2. Check if the strings are equal to return true and false otherwise
*/

/*
  Add written explanation of your solution here
  Divided the string into two bits using a for loop. The for loop loops through the string and crosschecking if the element at current index are equal to element at str.length-1-currentindex. The for loop the returns true if they are equal and false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
