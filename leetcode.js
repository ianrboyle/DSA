var isValid = function (s) {
  let leftPar = "(";
  let rightPar = ")";
  let leftBracket = "[";
  let rightBracket = "]";
  let leftCurly = "{";
  let rightCurly = "}";
  let freqCounter = {};
  for (let value of s) {
    freqCounter[value] = (freqCounter[value] || 0) + 1;
  }

  // "{ [ { } ] }"
  //   i         j
  let j = s.length - 1;
  for (let i = 0; i < j; i++) {
    if (s[i] === leftPar && s[j] !== rightPar) {
      return false;
    }
    if (s[i] === leftBracket && s[j] !== rightBracket) {
      return false;
    }
    if (s[i] === leftCurly && s[j] !== rightCurly) {
      return false;
    }
    j--;
  }
  if (freqCounter[leftPar] !== freqCounter[rightPar]) {
    return false;
  }
  if (freqCounter[leftBracket] !== freqCounter[rightBracket]) {
    return false;
  }
  if (freqCounter[leftCurly] !== freqCounter[rightCurly]) {
    return false;
  }
  return true;
};

console.log(isValid("([)]"));
