const expandedForm = (num) => {
    const digitsArr = num.toString().split('');
    const result = [];
    digitsArr.forEach((val, i) => {
        if (+val !== 0) {
            const numb = +val * (10 ** (digitsArr.length - i - 1));
            result.push(numb);
        }
    });
    return result.join(' + ');
}

console.log(expandedForm(12)) // '10 + 2');
console.log(expandedForm(42)) // '40 + 2');
console.log(expandedForm(70304)) // '70000 + 300 + 4');
