const plus = x => {
    return y => y + x;
}

const minus = x => {
    return y => y - x;
}

const times = x => {
    return y => y * x;
}

const dividedBy = x => {
    return y => Math.floor(y / x);
}

const expression = (number, operation) => {
    if(!operation)
        return number;
    return operation(number);
}

const zero = (operation) => expression(0, operation);
const one = (operation) => expression(1, operation);
const two = (operation) => expression(2, operation);
const three = (operation) => expression(3, operation);
const four = (operation) => expression(4, operation);
const five = (operation) => expression(5, operation);
const six = (operation) => expression(6, operation);
const seven = (operation) => expression(7, operation);
const eight = (operation) => expression(8, operation);
const nine = (operation) => expression(9, operation);

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
