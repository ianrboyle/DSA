const lengthOfLastWord = function (s) {
  let array = s.split(" ");
  for (let i = array.length; i > 0; i--) {
    if (array[i] === "") {
      array.pop(array[i]);
    }
    // if (array[i] !== "") {
    //   console.log(array[i]);
    //   // return array[i].length;
    // }
  }
  console.log(array[-1]);
  // console.log(array);
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
