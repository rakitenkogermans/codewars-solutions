const arrayDiff = (a, b) => {
    return a.filter(value => b.indexOf(value) < 0);
}

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([1,2,3], [1,2]));
