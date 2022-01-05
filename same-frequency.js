// given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(int1, int2) {
  let firstFreq = {};
  let secondFreq = {};
  let intOneArr = ("" + int1).split("");
  let intTwoArr = ("" + int2).split("");
  if (intOneArr.length !== intTwoArr.length) {
    return false;
  }

  for (let value of intOneArr) {
    firstFreq[value] = (firstFreq[value] || 0) + 1;
  }
  for (let value of intTwoArr) {
    secondFreq[value] = (secondFreq[value] || 0) + 1;
  }
  for (let key in firstFreq) {
    if (!(key in secondFreq)) {
      return false;
    }
    if (firstFreq[key] !== secondFreq[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(213, 321));
