const digital_root = (n) => {
    if (n < 10) {
        return n;
    } else {
        const sum = n.toString().split('').map(Number).reduce((a, b) => +a + +b);
        return digital_root(sum);
    }
}

console.log(digital_root(16));
console.log(digital_root(942))
