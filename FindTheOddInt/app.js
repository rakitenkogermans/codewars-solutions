const findOdd = (A) => {
    if (A.length === 1) return A[0];
    let oddCount = new Map();
    for (const [index, value] of A.entries()) {
        if (oddCount.has(value)) {
            oddCount.set(value, oddCount.get(value) + 1);
        } else {
            oddCount.set(value, 1);
        }
    }
    oddCount = new Map([...oddCount.entries()].sort((a, b) => a[1] - b[1]));
    for (const [key, value] of oddCount.entries()) {
        if (value % 2 === 1) {
            return key;
        } else {
            continue;
        }
    }
    return oddCount;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // , 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) //, -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) //, 5);
console.log(findOdd([10])) //, 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) //, 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])) //, 1);
