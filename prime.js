/// write a function that returns whether a given number is prime or not

// What is a prime number -
// its only divisible by itself and 1
// not even n % 2 != 0 --> could be prime
// if it returns a non zero value when % 2 is performed
// n % 2 != 0 --> could be prime

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(31));
