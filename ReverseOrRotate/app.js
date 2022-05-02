const reverse = s => s.split('').reverse().join('');
const rotate  = s => s.slice(1) + s.slice(0, 1);
const sum_cubes = c => c.split('').reduce((a, b) => a + (+b) ** 3, 0);

const revrot = (str, sz) => {
    if (sz < 1 || sz > str.length)
        return '';

    return str
        .match(new RegExp('.{' + sz + '}', 'g'))
        .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
        .join('');
}

console.log(revrot("1234", 0)) // "")
console.log(revrot("", 0)) // "")
console.log(revrot("1234", 5)) // "")
const s = "733049910872815764"
console.log(revrot(s, 5)) // "330479108928157")
