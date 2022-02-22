const twoSum = (numbers, target) => {
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let k = 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[k] === target) {
                result.push(i);
                result.push(k);
                break;
            }
        }
        if (result.length === 2)
            break;
    }
    return result;
}

console.log(twoSum([1,2,3], 4)) //.sort(numericalCompare), [0,2]);
console.log(twoSum([1234,5678,9012], 14690)) //.sort(numericalCompare), [1,2]);
console.log(twoSum([2,2,3], 4)) //.sort(numericalCompare), [0,1]);
