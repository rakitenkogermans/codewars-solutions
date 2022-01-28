const countBits = (n) => {
    return n.toString(2).split('').map(Number).reduce((prevValue, currValue) => currValue === 1 ? prevValue + currValue : prevValue + 0);
};

console.log(countBits(8))
console.log(countBits(1234))
