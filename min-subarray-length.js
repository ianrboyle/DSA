//write a function which accepts an array of int and a positive int
// returns the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed in

// [2,3,1,2,4,3] , 7 --> 2 ([4,3] is the smallest)
// [2,1,6,5,4], 9 --> 2 [5,4]

//sliding window

function minSubArrayLen(arr, n) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (total < n && arr.length) {
      total += arr[end];
      end++;
    } else if (total >= n) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// [2, 3, 1, 2, 4, 3], 7;
//  i     j
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
