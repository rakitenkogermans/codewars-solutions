const duplicateEncode = (word) => {
    const occurencies = new Map();
    const wordArr = word.split('');
    wordArr.forEach(val => {
        if (occurencies.has(val.toLowerCase())) {
            occurencies.set(val.toLowerCase(), occurencies.get(val.toLowerCase()) + 1);
        } else {
            occurencies.set(val.toLowerCase(), 1);
        }
    })
    const str = wordArr.map(val => occurencies.get(val.toLowerCase()) > 1 ? ')' : '(').join('');
    return str;
}

console.log(duplicateEncode("din")) // "(((");
console.log(duplicateEncode("recede")) // "()()()");
console.log(duplicateEncode("Success")) // ")())())","should ignore case");
console.log(duplicateEncode("(( @")) // "))((");
