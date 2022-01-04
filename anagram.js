// given two strings, write a function to determinge if the second string is ana anagram of the first

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  console.log(freqCounter1);
  console.log(freqCounter2);
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("racecard", "cadrrace"));
