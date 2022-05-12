const findMissing = (arr) => {
    const { length } = arr;
    let diff1 = arr[1] - arr[0];
    let diff2 = arr[length - 1] - arr[length - 2];
    if (diff1 !== diff2)
        if (diff1 === 2 * diff2)
            return arr[0] + diff2;
        else
            return arr[length - 1] - diff1;
    for (let i = 1; i < length - 2; i++)
        if (arr[i + 1] - arr[i] !== diff1)
            return arr[i] + diff1;
    return arr[0];
}

console.log(findMissing([1, 3, 4])) // 2);
