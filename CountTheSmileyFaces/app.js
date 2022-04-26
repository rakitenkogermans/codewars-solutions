const countSmileys = (arr) => {
    return arr.reduce((acc, face) => {
        const parts = face.split('');
        const eyes = (parts[0] === ':' || parts[0] === ';');
        const nose = parts.length === 2 ? true : (parts[1] === '-' || parts[1] === '~');
        const mouth = parts.length === 3 ? (parts[2] === ')' || parts[2] === 'D') : (parts[1] === ')' || parts[1] === 'D');
        return eyes && nose && mouth ? ++acc : acc;
    }, 0);
}

console.log(countSmileys([])) // 0);
console.log(countSmileys([':D',':~)',';~D',':)'])) // 4);
console.log(countSmileys([':)',':(',':D',':O',':;'])) // 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // 1);
