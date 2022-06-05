const isIntArray = (arr) => {
    return Array.isArray(arr) && arr.every(val => Math.floor(val) === val);
}

console.log(isIntArray([])) //, true, "Input: []");
console.log(isIntArray([1, 2, 3, 4])) //, true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN])) //, false, "Input: [1, 2, 3, NaN]");
