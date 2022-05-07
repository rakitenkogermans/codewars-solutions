const pyramid = (n) => {
    return Array.from({length:n},(_, i)=> new Array(i + 1).fill(1));
}

console.log(pyramid(0)) // []));
console.log(pyramid(1)) // [[1]]));
console.log(pyramid(2)) // [[1], [1, 1]]));
console.log(pyramid(3)) // [[1], [1, 1], [1, 1, 1]]));
