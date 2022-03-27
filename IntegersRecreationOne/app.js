const getDivisors = (x) => {
    const divisorsArr = [];
    for (let j = 1; j <= x; j++) {
        if (x % j === 0) {
            divisorsArr.push(j);
        }
    }
    return divisorsArr;
}

const listSquared = (m, n) => {
    const result = [];
    for (let i = m; i <= n; i++) {
        const divs = getDivisors(i);
        const sum = divs.reduce((acc, val) => acc + val * val, 0);
        if (Number.isInteger(Math.sqrt(sum))) {
            result.push([i, sum]);
        }
    }
    return result;
}


console.log(listSquared(1, 250)) // [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250)) // [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500)) // [[287, 84100]])
