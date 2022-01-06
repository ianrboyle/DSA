// write function that taks in an array of ints and a number n which finds the max sum of a subarray of length n

// subarray must consist of consecutive elements from the original array

//sliding window approach

function maxSubArraySum(arr, n) {
  let max = 0;
  let temp = 0;

  for (let j = 0; j < n; j++) {
    max += arr[j];
  }
  temp = max;
  for (let j = n; j < arr.length; j++) {
    temp = temp - arr[j - n] + arr[j];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubArraySum([100, 1000, 200, 300, 400, 250], 2));
// [100, 200, 300], 2
//
