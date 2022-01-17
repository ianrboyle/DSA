function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

function recursiveFactorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}
