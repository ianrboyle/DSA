// Given a list ''values” as defined below (List<Double [ ]>) and a list of String “stats” representing a statistical operation you are required to calculate the aggregation, based on the positional statistics, for each element of the list.
// List<String> stats = [“avg”, “sum”, “min”, “max”]
// List<Double []> values =
// [
// [1.0, 2.0, 1.4, 5.0],
// [4.0, 5.6, 78.4, 2.0],
// [2.0, 7.8, 4.2, 32.0], …]

function findStats(list, stats) {
  let statsHash = {};
  let otherHash = {};
  for (let index = 0; index < stats.length; index++) {
    statsHash[stats[index]] = { index: index, nums: [] };
  }
  // grab the first elelment of each list
  for (let index = 0; index < list.length; index++) {
    const subList = list[index];
    for (let value = 0; value < stats.length; value++) {
      if (value === statsHash[stats[value]].index) {
        statsHash[stats[value]].nums.push(subList[value]);
      }
    }
  }
  function average(list) {
    let sum = list.reduce((a, b) => a + b);
    return sum / list.length;
  }
  function addition(list) {
    let sum = list.reduce((a, b) => a + b);
    return sum;
  }
  function minimum(list) {
    let min = list.reduce((a, b) => (a < b ? a : b));
    return min;
  }
  function maximum(list) {
    let max = list.reduce((a, b) => (a > b ? a : b));
    return max;
  }
  for (let key in statsHash) {
    if (key === "avg") {
      let avg = average(statsHash[key].nums);
      console.log(avg);
    }
    if (key === "sum") {
      let sum = addition(statsHash[key].nums);
      console.log(sum);
    }
    if (key === "min") {
      let min = minimum(statsHash[key].nums);
      console.log(min);
    }
    if (key === "max") {
      let min = maximum(statsHash[key].nums);
      console.log(min);
    }
  }
}

findStats(
  [
    [1.0, 2.0, 1.4, 5.0],
    [4.0, 5.6, 78.4, 2.0],
    [2.0, 7.8, 4.2, 32.0],
  ],
  ["avg", "sum", "min", "max"]
);
