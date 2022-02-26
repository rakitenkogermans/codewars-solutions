const toUnderscore = (string) => {
    string = string.toString();
    const result = [];
    let k = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i + 1] === string[i + 1].toUpperCase() && !Number.isFinite(+string[i + 1])) {
            result.push(string.slice(k, i + 1).toLowerCase());
            k = i + 1;
        }
    }
    result.push(string.slice(k).toLowerCase());
    return [...result].join('_');
}

console.log(toUnderscore('TestController')) //, 'test_controller', 'Unexpected result')
console.log(toUnderscore('MoviesAndBooks')) //, 'movies_and_books', 'Unexpected result')
console.log(toUnderscore('App7Test')) //, 'app7_test')
console.log(toUnderscore(1)) //, '1')
