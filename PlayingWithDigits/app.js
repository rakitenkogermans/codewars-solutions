const digPow = (n, p) => {
    let result = 0;
    n
        .toString()
        .split('')
        .forEach(val => {
            result += Math.pow(val, p);
            p++;
        });
    return result % n === 0 ? result/n : -1;
}

console.log(digPow(89, 1)) // 1)
console.log(digPow(92, 1)) // -1)
console.log(digPow(46288, 3)) // 51)
