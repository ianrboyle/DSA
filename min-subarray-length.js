//write a function which accepts an array of int and a positive int
// returns the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed in

// [2,3,1,2,4,3] , 7 --> 2 ([4,3] is the smallest)
// [2,1,6,5,4], 9 --> 2 [5,4]

//sliding window

function minSubArrayLen(arr, n) {
  // if (arr.length < n) {
  //   return null;
  // }
  let j = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    if (arr[i] === n) {
      return arr[i];
    } else if (sum < n) {
      sum += arr[j];
      j += 1;
    } else {
      console.log(arr[i], arr[j]);
    }
  }
  return sum;
}

// [2, 3, 1, 2, 4, 3], 7;
//  i     j
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
