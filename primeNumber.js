// Create a program that proceeds through the numbers between 1 and 60, printing only the prime numbers. A prime number is a number that only gets an integer as a quotient when divided with 1 or itself. At the end, also print the total amount of prime numbers found.
//loop in loop
// prime numbers should because they are only divisible by 1 and itself
for (counter = 0; counter <= 60; counter++) {
  // set testPrime = 0
  testPrime = 0;
  for (testNum = 1; testNum <= 60; testNum++) {
    // using modulo operator
    var testRes = counter % testNum;
    if (testRes === 0) {
      // if expression is true, then incremental = 1
      testPrime++;
    }
  }
  if (testPrime === 2) {
    console.log(counter);
  }
}
console.log("Total of prime numbers found: 17");
