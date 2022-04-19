const arr = [];

const findOne = (n) => {
    if (n > 1)
        for(let i = 2;i <= n ;i++) {
            if (n % i == 0) {
                arr.push(i);
                findOne(n/i);
                return true;
            }
        }
    else
        return true;
}

const primeFactors = (n) => {
    findOne(n);
    const obj = arr.reduce((acc,x) => (acc[x] ? acc[x]++ : acc[x] = 1, acc), {});
    let str = '';
    for (const item in obj) {
        obj[item] == 1 && (str += `(${item})`);
        obj[item] > 1 && (str += `(${item}**${obj[item]})`);
    }
    return str;
}

console.log(primeFactors(7775460)) // "(2**2)(3**3)(5)(7)(11**2)(17)")
