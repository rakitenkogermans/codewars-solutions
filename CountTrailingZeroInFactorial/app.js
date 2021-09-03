function zeros (n)
{

    if(n < 0) //Negative Number Edge Case
        return -1;

    // Initialize result
    let count = 0;

    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);

    return count;
}

// function zeros (n) {
//     var n_factorial = factorial(n).toString();
//     var zeros_count = 0;
//     for (let i = n_factorial.length-1; i >= 0; i--) {
//         if (n_factorial[i] === '0') {
//             zeros_count++;
//         } else break
//     }
//     return n_factorial;
// }
//
// function factorial (a) {
//     let result = 1;
//     for (let i = 1; i <= a; i++) {
//         result *= i;
//     }
//     return result;
// }

console.log(zeros(30));
