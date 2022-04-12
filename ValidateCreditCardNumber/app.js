const validate = (n) =>{
    return n
        .toString()
        .split('')
        .reverse()
        .map((num, i) => {
            if (i % 2 === 1) {
                return num = num * 2 > 9 ? num * 2 - 9 : num * 2;
            }
            return num;
        })
        .reduce((acc, val) => acc + +val, 0) % 10 === 0;
}

console.log(validate(123)) // false);
console.log(validate(1)) // false);
console.log(validate(2121)) // true);
console.log(validate(1230)) // true);
