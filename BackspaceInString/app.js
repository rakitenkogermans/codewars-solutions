const cleanString = (s) => {
    const result = [];
    s.split('').map(val => val === '#' ? result.pop() : result.push(val));
    return result.join('');
}

console.log(cleanString('abc#d##c')) // 'ac');
console.log(cleanString('abc####d##c#')) // '');
