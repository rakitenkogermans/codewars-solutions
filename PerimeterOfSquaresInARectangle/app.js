const perimeter = (n) => {
    if (n === 0) return 4;
    if (n === 1) return 8;
    let count = 2;
    let fib_arr = [1, 1];
    let result = 0;
    while (count <= n) {
        fib_arr.push(fib_arr[count-1] + fib_arr[count-2]);
        count++;
    }
    for (let i = 0; i < fib_arr.length; i++) {
        result += fib_arr[i];
    }
    return 4 * result;
}

console.log(perimeter(0));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));
console.log(perimeter(30));
