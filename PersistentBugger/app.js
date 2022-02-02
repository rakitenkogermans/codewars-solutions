const persistence = (num) => {
    let count = 0;
    let numbersArr = num.toString().split('');
    while (numbersArr.length > 1) {
        count++;
        const m = numbersArr.reduce((a, b) => a * b);
        numbersArr = m.toString().split('');
    }
    return count;
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
