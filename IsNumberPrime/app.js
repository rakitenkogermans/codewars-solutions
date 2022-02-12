const isPrime = (num) => {
    if (num < 2)
        return false;
    if (num === 2)
        return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(0)) //  false, "0 is not prime");
console.log(isPrime(1)) //  false, "1 is not prime");
console.log(isPrime(2)) //  true, "2 is prime");
console.log(isPrime(73)) // true, "73 is prime");
console.log(isPrime(75)) // false, "75 is not prime");
console.log(isPrime(-1)) // false, "-1 is not prime");
