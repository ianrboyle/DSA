// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

function findFirstDuplicate(arr) {
  let start = 0;
  let next = start + 1;

  while (start < arr.length - 1) {
    if (arr[start] === arr[next]) {
      return arr[start];
    } else if (next === arr.length) {
      start++;
      next = start + 1;
    } else {
      next++;
    }
  }
  return null;
}

console.log(findFirstDuplicate([5, 2, 9, 7, 6, 9]));
