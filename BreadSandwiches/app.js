const slicesToName = (n) => {
    if (!Number.isFinite(n) || n < 2)
        return null;
    const resultArr = new Array(Math.floor((n+1) / 2)).fill('sandwich');
    if (n & 1)
        resultArr[0] = 'bread';
    return resultArr.join(' ');
}

const nameToSlices = (name) => {
    if (typeof name !== 'string' || name === '')
        return null;
    const arr = name.split(' ');
    if (arr.length === 1)
        return arr[0] === 'sandwich' ? 2 : null;
    if (arr.every((val) => val === 'sandwich'))
        return arr.length * 2;
    if (arr[0] === 'bread' && arr.slice(1).every((val) => val === 'sandwich'))
        return 1 + arr.slice(1).length * 2;
    return null;
}

console.log(slicesToName(false)) // null)
console.log(slicesToName(1)) // null)
console.log(slicesToName(-2)) // null)
console.log(slicesToName('bread')) // null)
console.log(slicesToName(2)) // 'sandwich')
console.log(slicesToName(3)) // 'bread sandwich')
console.log(slicesToName(11)) //'bread sandwich sandwich sandwich sandwich sandwich')
console.log(slicesToName(8)) // 'sandwich sandwich sandwich sandwich')

console.log(nameToSlices(12)) // null)
console.log(nameToSlices('')) // null)
console.log(nameToSlices('sandwich sandwich bread sandwich')) // null)
console.log(nameToSlices('sand wich')) // null)
console.log(nameToSlices('bread sandwich')) // 3)
console.log(nameToSlices('sandwich sandwich sandwich sandwich')) // 8)
console.log(nameToSlices('bread')) // null)
console.log(nameToSlices('bread sandwich sandwich sandwich')) // 7)
console.log(nameToSlices('bread sandwich bread sandwich')) // null)
