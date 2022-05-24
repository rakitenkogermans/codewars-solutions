const foldArray = (array, runs) => {
    for (let i = 0; i < runs; i++) {
        const oddOrEvenLength = array.length % 2 === 1 ? 1 : 0;
        const leftSide = array.slice(0, Math.floor(array.length / 2) + oddOrEvenLength);
        const rightSide = array.slice(Math.floor(array.length / 2) + oddOrEvenLength).reverse();
        array = [...leftSide].map((val, index) => rightSide[index] ? val + rightSide[index] : val);
    }
    return array;
}

let input = [1, 2, 3, 4, 5];
console.log(foldArray(input, 1)); // [ 6, 6, 3 ]

input = [ -9, 9, -8, 8, 66, 23 ];
console.log(foldArray(input, 1)); // [ 14, 75, 0 ]
