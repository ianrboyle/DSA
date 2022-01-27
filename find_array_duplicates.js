// find the duplicates in an array

function findDuplicates(arr) {
  let freqCounter = {};

  for (let value of arr) {
    freqCounter[value] = (freqCounter[value] || 0) + 1;
  }
  const duplicates = [];
  for (let key in freqCounter) {
    console.log(freqCounter[key]);
    if (freqCounter[key] >= 2) {
      duplicates.push(key);
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 5, 5, 2, 4, 1, 4, 2, 5, 6]));
