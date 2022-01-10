//write function which accepts a string and rreturns the length of the longest substring with all disttinct chars

// rithmschool --> 7
// i      j
// thisisawesome -->6

function findLongestSubstring(str) {
  if (str.length === 1) {
    return 1;
  }
  let counter = 0;
  let temp = 0;
  let j = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      counter += 1;
    }
    // } else {
    //   if (temp < counter) {
    //     temp = counter;
    //   }
    //   counter = 0;
    //   j = i + 1;
    // }
  }
  console.log(temp, counter);
}

findLongestSubstring("rithmschool");
findLongestSubstring("thisisawesome");
