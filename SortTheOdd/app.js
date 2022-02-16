const sortArray = (array) => {
    const oddArr = [];

    array.forEach(val => {
        if (val % 2 !== 0) {
            oddArr.push(val);
        }
    });

    oddArr.sort((a, b) => a - b);

    return array.map((val, i) => {
        if (val % 2 === 0) {
            return val;
        }
        if (val % 2 !== 0) {
            return oddArr.shift();
        }
    })
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]);
console.log(sortArray([])) // []);
