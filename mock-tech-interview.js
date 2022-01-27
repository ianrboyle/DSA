// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

// Input "helloooo"
// output "l"

// assume string always has duplicate
// create a loop that iterates over each char in string
// use a for loop
// create an index variable
// compare adjacent letters with index and index + 1
// if adjacent letter are equal
// return the letter at the current index

// function duplicateLetter(str) {
//   for (let index = 0; index < str.length; index++) {
//     if (str[index] === str[index + 1]) {
//       return str[index];
//     }
//   }
//   return "No duplicates found.";
// }

// console.log(duplicateLetter("helo"), "fail");
// console.log(duplicateLetter("hello"), "pass");
// console.log(duplicateLetter("abcdefghhijkkloooop"), "pass");
// let str1 = "hello";

// console.log(str1[0]);

// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

// Input 4
// Output 2

// Input 11
// Output 55

// create an array to store fib numbers
// we need an equation that takes the sum of the last two numbers in out fib array
// push that sum into our fib array

// fibArray = [0, 1]
// create a sum variable
// iterate over fibArray - taking the sum of the last two positions in it
//  push that sum into the fibArray
//  iterate over the array again, repeating the process
// our break point will be once fibArray length = n
// return fibArray[n]

// Input 4
// Output 2
// fibArray = [0, 1, 1, 2]
function fiboncacci(n) {
  let fibArray = [0, 1];
  let sum = 0;
  if (n === 0 || n === 1) {
    return n;
  }
  for (let index = 0; index <= n; index++) {
    sum = fibArray[index] + fibArray[index + 1];
    fibArray.push(sum);
    sum = 0;
  }

  return fibArray[n - 1];
}

console.log(fiboncacci(6), "expects 5");
console.log(fiboncacci(5), "expects 3");
console.log(fiboncacci(9), "expects 21");
console.log(fiboncacci(11), "expects 55");
console.log(fiboncacci(4), "expects 2");
console.log(fiboncacci(0), "expects 0");
console.log(fiboncacci(1), "expects 1");

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

// Input 4
// Output 2

// Input 11
// Output 55
