const lastDigit = (base, exponent) => {
    if (+exponent === 0) {
        return 1;
    }
    base = base.slice(-1);
    exponent = exponent.slice(-2);
    let newExp = exponent % 4;
    newExp = newExp === 0 ? 4 : newExp;
    return (base ** newExp) % 10;
}

console.log(lastDigit("4", "0")) //, 1);
console.log(lastDigit("0", "4")) //, 1);
console.log(lastDigit("4", "1")) //, 4);
console.log(lastDigit("4", "2")) //, 6);
console.log(lastDigit("9", "7")) //, 9);
console.log(lastDigit("10","10000000000")) //, 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376")) //, 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")) //, 7);
