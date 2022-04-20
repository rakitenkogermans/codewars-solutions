// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number

const validate = (password) => {
    return /(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(^([a-zA-Z0-9])*$)/.test(password);
}

console.log(validate('djI38D55'));
console.log(validate('a2.d412'));
console.log(validate('JHD5FJ53'));
console.log(validate('!fdjn345'));
console.log(validate('jfkdfj3j'));
console.log(validate('123'));
console.log(validate('abc'));
console.log(validate('Password123'));
