// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

// ["a", "b", "c", "d", "e", "f"]
//   s,        n
// newArr= []

function unmeshArray(arr) {
  let start = 0;
  let next = 0;
  let newArr = [];
  while (start < arr.length) {
    if (next === arr.length) {
      next = 0;
      start++;
    } else if (start === next) {
      next++;
    } else {
      newArr.push(arr[start] + arr[next]);
      next++;
    }

    // start++;
    // next++;
  }

  return newArr;
}

console.log(unmeshArray(["a", "b", "c", "d"]));
