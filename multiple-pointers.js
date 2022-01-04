// write a function which accepts a sorted array of integers
// function should find the first pair where the sum is 0
// return an array that includes both values that sum to 0 or undefined
// if no pair exists

function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum < 0) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return "undefined";
}

console.log(sumZero([-3, -2, -1, 0, 1]));
