const kebabize = str => {
    return str
        .replace(/[0-9]/g, '')
        .split('')
        .map((letter, i) => letter.toUpperCase() === letter ? `${i !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter)
        .join('');
}

console.log(kebabize('myCamelCasedString')) //, 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps')) //, 'my-camel-has-humps');
