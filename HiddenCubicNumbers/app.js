const isSumOfCubes = (s) => {
    let arr = s.match(/\d+/g).map(val => {
        const tmp = [];
        for (let i = 0; i < val.length; i += 3){
            tmp.push(val.slice(i, i + 3));
        }
        return tmp;
    });
    arr = [].concat(...arr);
    const result = arr.filter(val => +val === (val.split('').reduce((acc, b) => acc + (b ** 3), 0))).map(Number);
    return result.length ? `${result.join(' ')} ${result.reduce((acc, b) => acc + b, 0)} Lucky` : 'Unlucky';
}

console.log(isSumOfCubes("0 9026315 -827&()")) // "0 0 Lucky");
console.log(isSumOfCubes("9026315 -827&()")) // "Unlucky");
console.log(isSumOfCubes("abc509Lucky1abc66a time370250 & 86Lucky370391abc50xyz37092"))
