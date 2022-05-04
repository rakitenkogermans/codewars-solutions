const nthFibo = (n) => {
    if (n === 1)
        return 0;
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 2; i < n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
}

console.log(nthFibo(1)) // 0,"1-st Fibo");
console.log(nthFibo(2)) // 1,"2-nd Fibo");
console.log(nthFibo(3)) // 1,"3-rd Fibo");
console.log(nthFibo(4)) // 2,"4-th Fibo");
