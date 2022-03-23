const parse = (data) => {
    const result = [];
    let value = 0;
    data
        .split('')
        .forEach(char => {
            if (char === 'i')
                value++;
            if (char === 'd')
                value--;
            if (char === 's')
                value = value ** 2;
            if (char === 'o')
                result.push(value);
    })
    return result;
}

console.log(parse("iiisdoso")) // [ 8, 64 ] );
console.log(parse("iiisxxxdoso")) // [ 8, 64 ] );
