const fibonacci = (n) => {
    if (n < 2) return n;

    const arr = [1, 1];
    for (let i = 1; i < n; i++) {
        arr.push(arr[arr.length - 2] + arr[i]);
    }
    return arr[arr.length - 2];
}

console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(5)) // 5
console.log(fibonacci(10)) // 55
console.log(fibonacci(15)) // 610
console.log(fibonacci(20)) // 6765

console.log(fibonacci(50)) // 12586269025
console.log(fibonacci(60)) // 1548008755920
console.log(fibonacci(70)) // 190392490709135
