const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

const base64toBase10 = (base64) => {
    return base64.split('').reverse().map((val, index) => (ALPHABET.indexOf(val) * 64 ** index)).reduce((acc, val) => acc + val, 0);
}

console.log(base64toBase10('/'));
console.log(base64toBase10('BA'));
console.log(base64toBase10('BB'));
console.log(base64toBase10('BC'));
