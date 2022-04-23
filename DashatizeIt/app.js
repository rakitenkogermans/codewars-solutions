const dashatize = (num) => {
    if (!Number.isFinite(num) && num !== 0)
        return NaN.toString();
    num = Math.abs(num) + '';
    num = num
        .split('')
        .map(Number)
        .map((n, i, numbers) => {
        return n % 2 !== 0 ? (numbers[i - 1] % 2 === 0 ? `-${n}-` : `${n}-`) : n;
    })
    num = num.join('')
    num = num[num.length-1] === '-' ? num.slice(0,num.length-1) : num;
    return num;
}

console.log(dashatize(274)) // "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311)) // "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320)) // "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302)) // "9-7-4-3-02", "Should return 9-7-4-3-02");

console.log(dashatize(NaN)) // "NaN", "Should return NaN");
console.log(dashatize(0)) // "0", "Should return 0");
console.log(dashatize(-1)) // "1", "Should return 1");
console.log(dashatize(-28369)) // "28-3-6-9", "Should return 28-3-6-9");
