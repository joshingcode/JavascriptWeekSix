// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

// 
let grades = array => array.reduce((x,y)=>x+y)/array.length; 

console.log(grades([5,7,9,3,10,20]))





// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

function pivotUnknown(x){
    let nums= [5,7,9,3,10,20,60]
    let index= nums.indexOf(x)
    return index
}
console.log(pivotUnknown(4))


// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className
// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 

document.querySelector('#redButton').addEventListener('click',bgRed)
document.querySelector('#whiteButton').addEventListener('click',bgWhite)

function bgRed(){
    document.querySelector('body').style.backgroundColor= 'red'
    document.querySelector('body').style.color='white'
}

function bgWhite(){
    document.querySelector('body').style.backgroundColor='white'
    document.querySelector('body').style.color='red'
}





// See next page ...
// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1


var coinChange = (coins, amount) =>{
    let dp = Array(amount + 1).fill(amount + 1);
  
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
      for (var j = 0; j < coins.length; j++) {
        if (i >= coins[j]) {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
  };







