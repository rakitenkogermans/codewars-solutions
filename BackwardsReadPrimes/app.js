const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}

const backwardsPrime = (start, stop) => {
    const result = [];
    for (let i = start; i <= stop; i++) {
        if (isPrime(i) && isPrime(Number(i.toString().split('').reverse().join(''))) && i !== Number(i.toString().split('').reverse().join('')))
            result.push(i);
    }
    return result;
}

// var a = [9923, 9931, 9941, 9967]
console.log(backwardsPrime(9900, 10000)) //, a)
