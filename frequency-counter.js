// write function that accepts two arrrays - it should return true if every value in the first array has its corresponding value squared in the second array, frequency of values should also e the same

//same([1, 2, 3], [4, 1, 9]) --> true
//same([1, 2, 3], [1, 9]) --> false

// loop over each array separately/ individually

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }

  let freqCount1 = {};
  let freqCount2 = {};

  for (let value of arr1) {
    freqCount1[value] = (freqCount1[value] || 0) + 1;
  }
  for (let value of arr2) {
    freqCount2[value] = (freqCount2[value] || 0) + 1;
  }

  for (let key in freqCount1) {
    if (!(key * key in freqCount2)) {
      console.log(false);
      return false;
    }
    if (freqCount2[key * key] !== freqCount1[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

same([1, 5, 2, 4], [25, 1, 16, 4]);
