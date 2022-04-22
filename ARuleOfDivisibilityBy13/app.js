const thirt = n => {
    const l = [1, 10, 9, 12, 3, 4];
    let sum = n;
    while (1) {
        let tmp = sum;
        sum = sum
            .toString()
            .split('')
            .reverse()
            .join('')
            .split('')
            .map((val, i) => val * l[i % 6])
            .reduce((acc, val) => acc + val,0);
        if (sum === tmp)
            break;
    }
    return sum
}

console.log(thirt(8529)) // 79)
console.log(thirt(85299258)) // 31)
console.log(thirt(5634)) // 57)
console.log(thirt(1111111111)) // 71)
console.log(thirt(987654321)) // 30)
