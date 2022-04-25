const narcissistic = (value) => {
    return value
        .toString()
        .split('')
        .map(Number)
        .map((val, _, arr) => val ** arr.length)
        .reduce((acc, val) => acc + val, 0) === value;
}

console.log(narcissistic(7)) // true, "7 is narcissistic" );
console.log(narcissistic(371)) // true, "371 is narcissistic" );
console.log(narcissistic(1652)) // false
