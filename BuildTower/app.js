const pad = (str, length, char = ' ') =>
    str.padStart((str.length + length) / 2, char).padEnd(length, char);

const towerBuilder = (nFloors) => {
    const floorLength = (nFloors * 2) - 1;
    const result = [];
    for(let i = 0, k = 1; i < nFloors; i++, k += 2) {
        result.push(pad('*'.repeat(k), floorLength));
    }
    return result;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
