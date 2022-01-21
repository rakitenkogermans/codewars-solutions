const moveZeros = (arr) => {
    let zeroArray = [];
    arr = arr.filter((item) => {
        if (item === 0) zeroArray.push(0);
        return item !== 0;
    })
    return [...arr, ...zeroArray];
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
