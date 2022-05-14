const findMissing = (list) => {
    const step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter((val, index) => val !== (list[0] + index * step))[0] - step;
};

const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!Array.isArray(arrayOfArrays))
        return 0;
    if (arrayOfArrays.length === 0)
        return 0;
    const seq = arrayOfArrays.map(arr => arr ? arr.length : 0).sort((a, b) => a - b);
    if (seq.includes(0)) {
        return 0
    }
    return findMissing(seq);
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) //, 3);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) //, 2);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )) //, 2);
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )) //, 5);
console.log(getLengthOfMissingArray([ ])) //, 0);
