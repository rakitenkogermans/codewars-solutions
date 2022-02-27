const count = (string) => {
    return string.split('').reduce((acc, val) => (acc[val] = acc[val] ? acc[val] + 1 : 1, acc), {});
}

console.log(count("aba")) //, { a: 2, b: 1 });
console.log(count("")) //, {});
