const getLastDigitOfPow = (base, exponent) => {
    if (+exponent === 0) {
        return 1;
    }
    console.log(base.slice(-1));
    if (base.slice(-1) === '0')
        base = base.slice(-2);
    else
        base = base.slice(-1);
    exponent = exponent.slice(-2);
    let newExp = exponent % 40;
    newExp = newExp === 0 ? 4 : newExp;
    return (base ** newExp) % 100;
}

// const lastDigit = (lst) => {
//     if (lst.length === 0)
//         return 1;
//     let i = lst.length - 1;
//     let lastExp = 0;
//     while (lst.length > 1) {
//         console.log(lst);
//         const base = lst[i-1];
//         const exp = lst[i];
//         lastExp = getLastDigitOfPow(base.toString(), exp.toString());
//         lst.pop();
//         i = lst.length - 1;
//         lst[i] = lastExp;
//         // lastExp = nextPow;
//     }
//     return lastExp % 10;
// }

const lastDigit = (lst) => {
    if (lst.length === 0)
        return 1;
    let result = 1
    for (num of lst.reverse()) {
        console.log(num);
        result = num ** (result < 4 ? result : result % 4 + 4);
    }
    return result % 10;
}

// console.log(lastDigit([]         )) // 1);
// console.log(lastDigit([0,0]      )) // 1); // 0 ^ 0
// console.log(lastDigit([0,0,0]    )) // 0); // 0^(0 ^ 0) = 0^1 = 0
// console.log(lastDigit([1,2]      )) // 1);
// console.log(lastDigit([3,4,5]    )) // 1);
// console.log(lastDigit([4,3,6]    )) // 4);
// console.log(lastDigit([7,6,21]   )) // 1);
console.log(lastDigit([12,30,21] )) // 6);
// console.log(lastDigit([2,2,2,0]  )) // 4);
// console.log(lastDigit([937640,767456,981242] )) // 0);
// console.log(lastDigit([123232,694022,140249] )) // 6);
// console.log(lastDigit([499942,898102,846073] )) // 6);
