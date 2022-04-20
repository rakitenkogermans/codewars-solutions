const snail = (array) => {
    let result_array = [];
    while (array.length > 0) {
        // cut first line
        array.shift().forEach((item) => {
            result_array.push(item);
        });
        // or simply result_array.push(...array.shift());
        //with spread operator
        if (!array.length > 0) {
            break;
        }
        // cut right column
        for (let i = 0; i < array.length; i++) {
            result_array.push(array[i].pop());
        }
        // cut last line and reverse it
        let tmpRow = [];
        array.pop().forEach((item) => {
            tmpRow.push(item);
        });
        tmpRow.reverse().forEach((item) => {
            result_array.push(item);
        })
        // cut first column and reverse it
        let tmpCol = [];
        for (let i = 0; i < array.length; i++) {
            tmpCol.push(array[i].shift());
        }
        tmpCol.reverse().forEach((item) => {
            result_array.push(item);
        })
    }
    return result_array;
}

console.log(snail([
    []
]));

console.log(snail([
    [1]
]));

console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]));

console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
]));
