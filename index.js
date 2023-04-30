function hasTargetSum(array, target) {
  return array.reduce((foundPair, currentValue, currentIndex) => {
    const complement = target - currentValue;
    const restOfArray = array.slice(currentIndex + 1);
    const foundInRest = restOfArray.includes(complement);
    return foundPair || foundInRest;
  }, false);
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10))
/* 
  Write the Big O time complexity of your function here
*/

/* 
1:Loop through the input array from index 0 to n-1.
2:For each iteration, subtract the current value from the target to get the complement.
3:Slice the rest of the array from the current index + 1 to n-1.
4:Check if the complement exists in the rest of the array using the includes method.
5:If the complement is found, return true, indicating that a pair with the target sum exists.
6:If the loop completes and no pair is found, return false.
*/

/*
  The function takes in an array and a target number and checks if there are any two numbers in the array that add up to the target. The implementation achieves this by using a nested loop that compares each element in the array to all other elements after it to check if their sum is equal to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
