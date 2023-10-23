function sieveOfEratosthenes(n) {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (primes[p]) {
      for (let i = p * p; i <= n; i += p) {
        primes[i] = false;
      }
    }
  }

  const primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

const maxNumber = 100; // Change this to the maximum number you want to find primes up to.
const primeNumbers = sieveOfEratosthenes(maxNumber);
console.log("Prime Numbers up to", maxNumber, ":", primeNumbers);
