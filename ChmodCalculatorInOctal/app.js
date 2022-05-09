const chmodCalculator = (perm) => {
    const chmodNums = {user: '0', group: '0', other: '0'};
    for (const keyPerm in perm) {
        const tmp = perm[keyPerm];
        const r = tmp[0] === 'r' ? 4 : 0;
        const w = tmp[1] === 'w' ? 2 : 0;
        const x = tmp[2] === 'x' ? 1 : 0;
        chmodNums[keyPerm] = (r + w + x).toString();
    }
    let result = '';
    for (const keyChmod in chmodNums)
        result += chmodNums[keyChmod];
    return result;
}

console.log(chmodCalculator({user: 'rwx', group: 'r-x', other: 'r-x'})) //"755");
console.log(chmodCalculator({user: 'rwx', group: 'r--', other: 'r--'})) //"744");
console.log(chmodCalculator({user: 'r-x', group: 'r-x', other: 'r-x'})) //"555");
console.log(chmodCalculator({group: 'rwx'})) //"070");
