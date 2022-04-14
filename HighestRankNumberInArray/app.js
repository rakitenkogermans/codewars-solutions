const highestRank = (arr) => {
    const occurrencies = arr.reduce((acc, num) => (acc[num] = acc[num] ? acc[num] + 1 : 1, acc), {});
    const rank = Object.entries(occurrencies).sort((a, b) => {
        if (a[1] === b[1])
            return b[0] - a[0]
        return b[1] - a[1]
    });
    return +rank[0][0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
console.log(highestRank([12,10,8,12,7,6,4,10,10]))
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
