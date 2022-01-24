const digitSum = (number) => {
    let sum = 0;
    number.split('').forEach(value => {
        sum += +value;
    })
    return sum;
}

const compareMethod = (a, b) => {
    const aDigitSum = digitSum(a);
    const bDigitSum = digitSum(b);
    if (aDigitSum < bDigitSum) return -1;
    if (aDigitSum > bDigitSum) return 1;
    if (aDigitSum === bDigitSum) {
        if (a+'' > b+'') return 1;
        if (a+'' < b+'') return -1;
    }
    if (+a < +b) return -1;
    if (+a > +b) return 1;
    return 0;
}

const orderWeight = (str) => {
    const numArr = str.trim().split(' ');
    numArr.sort(compareMethod);
    return numArr.join(' ');
}

console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
console.log(orderWeight("56 65 74 100 99 68 86 180 90")); // "100 180 90 56 65 74 68 86 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"
