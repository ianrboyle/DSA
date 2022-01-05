// write a function which accepts an array of integers and a number n. the function should calculate the max sum of n consecutive elements in the array

function maxSubArray(arr, n) {
  let max = 0;
  let temp = 0;
  if (arr.length < n) return null;
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
// add the next number and subtract the first - compare to our temp value
// 1,2,5,2,8,1,5
// j   i
console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
