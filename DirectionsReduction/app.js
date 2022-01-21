const dirReduc = (arr) => {
    const ns = ["NORTH", "SOUTH"];
    const we = ["WEST", "EAST"];
    let i = 0;
    while (i < arr.length) {
        const temp = [arr[i], arr[i+1]].join('');
        if (temp === ns.join('') || temp === ns.reverse().join('') || temp === we.join('') || temp === we.reverse().join('')) {
            arr.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) // []
