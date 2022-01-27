// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

function meshArrays(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push(arr1[i] + arr2[j]);
    }
  }
  return newArr;
}

console.log(meshArrays(["a", "b", "c"], ["d", "e", "f", "g"]));
