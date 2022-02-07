const isPP = (n) => {
    const square = Math.round(Math.sqrt(n));

    for (let i = 2; i < square + 1; i++) {
        let k = 0;
        while (i ** k < n) {
            k++;
        }
        if (i ** k === n) return [i, k];
    }

    return null;
}

console.log(isPP(4)) //, [2,2], "4 = 2^2");
console.log(isPP(9)) //, [3,2], "9 = 3^2");
console.log(isPP(5)) //, null, "5 isn't a perfect number");
