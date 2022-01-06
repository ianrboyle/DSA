// write a function that takes in two strings and checks where the chars in the first for a subsequence of the chars in the second.

// "hello", "hello world" --> true
// "sing", "sting" --> true
//"abc", "abracadabra" --> true
//"abc", "acb" --> false

//solution does not solve the last example
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (j < str2.length || i < str1.length) {
    if (str1[i] === str2[j]) {
      newArr.push(str2[j]);
      j++;
      i++;
    } else {
      j++;
    }
  }
  newArr = newArr.join("");
  if (newArr === str1) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSubsequence("abc", "acb"));
function isSubsequenced(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}
console.log(isSubsequenced("abc", "abracadaragti"));
