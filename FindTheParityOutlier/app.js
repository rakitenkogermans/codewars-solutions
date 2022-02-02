const findOutlier = (integers) => {
    const odd = integers.filter(val => Math.abs(val % 2) === 1);
    const even = integers.filter(val => val % 2 === 0);
    if (odd.length === 1)
        return odd[0];
    if (even.length === 1)
        return even[0];
}

console.log(findOutlier([0, 1, 2])) //  1
console.log(findOutlier([1, 2, 3])) //  2
console.log(findOutlier([2,6,8,10,3])) //  3
console.log(findOutlier([0,0,3,0,0])) //  3
console.log(findOutlier([1,1,0,1,1])) //  0
