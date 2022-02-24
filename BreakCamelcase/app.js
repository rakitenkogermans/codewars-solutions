const solution = (string) => {
    const result = [];
    let k = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i + 1] === string[i + 1].toUpperCase()) {
            result.push(string.slice(k, i + 1));
            k = i + 1;
        }
    }
    result.push(string.slice(k));
    return [...result].join(' ');
}

console.log(solution('camelCasing')) //, 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest')) //, 'camel Casing Test', 'Unexpected result')
console.log(solution('wantCallGet')) //, 'want Call Get')
