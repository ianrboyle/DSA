// write a function that takes in a sorted array and a target average. Determine if there is a pair of values in the array where the average of the pair equals the target average

// maybe use frequency counter method? no that wouldnt work

function averagePair(arr, target) {
  let j = arr.length - 1;
  let i = 0;

  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === target) {
      return true;
    } else if (avg > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
