function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    //base case - if array length is 0
    if (helperInput.length === 0) {
      return;
    }
    // if fist element is odd, push that element into result
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // pass in a smaller array (everything from the 1st element on, back into the helper function)

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOdds([1, 2, 3, 12, 343, 2, 665, 77]));
