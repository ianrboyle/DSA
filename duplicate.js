// write a function that accepts a variable number of arguments, and checks whetehr there are any duplicate amonf the args passed in

function areThereDuplicates(...args) {
  let i = 0;
  let j = 1;

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3, 5));

// i = 0, j = 4, counter = 0
//   1       5
// i = 0, j = 3, counter = 1
//   1       3
