// implement function that accepts a sorted array, counts the unique values in the array

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let leftIndex = 0;
  let rightIndex = 1;
  while (rightIndex < arr.length) {
    //compare left and right index
    // if they are not equal, add 1 to uniques
    // this does not solve the issue if there are two of the same number
    if (arr[leftIndex] === arr[rightIndex]) {
      rightIndex += 1;
    } else if (arr[leftIndex] !== arr[rightIndex]) {
      leftIndex += 1;
      arr[leftIndex] = arr[rightIndex];
      rightIndex += 1;
    }
  }
  return leftIndex + 1;
}

console.log(countUniqueValues([]));
