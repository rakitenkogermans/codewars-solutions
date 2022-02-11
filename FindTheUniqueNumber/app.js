const findUniq = (arr) => {
    const occurencies = arr.reduce((acc, val) => (acc[val] = acc[val] ? acc[val] + 1 : 1, acc), {});
    for (const [key, value] of Object.entries(occurencies)) {
        if (value === 1)
            return +key;
    }
}

console.log(findUniq([ 1, 0, 0 ])) //, 1);
console.log(findUniq([ 0, 1, 0 ])) //, 1);
console.log(findUniq([ 0, 0, 1 ])) //, 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //, 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ])) //, 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ])) //, 10);
