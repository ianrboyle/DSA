function collectOdds(arr) {
  //defined each time through - gets reset to empty every time
  let newArr = [];

  // check if input array is empty
  if (arr.length === 0) {
    return newArr;
  }
  //check if first number is odd
  if (arr[0] % 2 !== 0) {
    //push that number (if odd) into newArr
    newArr.push[arr[0]];
  }

  //set newArr equal to newArr + concatonate the result of collectOdds
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

console.log(collectOdds([1, 2, 3, 4, 5]));

// after first time through:
// 1 gets pushed into newArr
// newArr = [1]
// concat
// [1].concat(collectOdds([2,3,4,5]))
//        2 is not odd - so does not get pushed
//        [].concat(collectOdds[3,4,5])
//                3 is odd - gets pushed
//                [3].concat(collectOdds([4,5]))
//                        4 not odd
//                        [].concat(collectOdds([5]))
//                                5 is odd
//                                 [5].concat(collectOdds([]))
//                                          arr is empty - returns newArr
