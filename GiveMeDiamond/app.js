function diamond(n){
    if (n === 0 || n < 0 || n % 2 === 0 ) return null;
    let diam_arr = [];
    for (let i = 0; i < n; i += 2) {
        let diam = '';
        for (let j = 0; j <= i; j++) {
            diam += '*';
        }
        diam_arr.push(diam);
    }
    for (let i = n-2; i > 0; i -= 2) {
        let diam = '';
        for (let j = 0; j < i; j++) {
            diam += '*';
        }
        diam_arr.push(diam);
    }

    for (let i = 0; i < diam_arr.length; i++) {
        let char = diam_arr[i];
        let spaces = '';
        let space_count = Math.round((n - char.length)/2);
        for (let j = 0; j < space_count; j++) {
            spaces += ' ';
        }
        diam_arr[i] = spaces + char;
    }
    return diam_arr.join('\n')+'\n';
}

console.log(diamond(1))
console.log(diamond(3))
console.log(diamond(5))
console.log(diamond(2))
console.log(diamond(-3))
console.log(diamond(0))

//   *
//  ***
// *****
//  ***
//   *
