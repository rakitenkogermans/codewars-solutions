const sqInRect = (x, y) => {
    if (x === y)
        return null;
    const result = [];
    while (y !== x) {
        if (y > x) {
            y -= x;
            result.push(x);
        } else {
            if (x > y) {
                x -= y;
                result.push(y);
            }
        }
    }
    result.push(y);
    return result;
}

console.log(sqInRect(5, 5)) // null)
console.log(sqInRect(5, 3)) // [3, 2, 1, 1])
console.log(sqInRect(3, 5)) // [3, 2, 1, 1])
console.log(sqInRect(20, 14)) // [14, 6, 6, 2, 2, 2])
