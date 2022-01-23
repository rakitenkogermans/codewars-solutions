const rot13 = (message) => {
    let result = [];
    const alphabet =
        Array
            .from(Array(26))
            .map((e, i) => i + 65)
            .map((x) => String.fromCharCode(x));
    const msgArr = message.split('');
    msgArr.forEach(char => {
        const alphabetIndex = alphabet.indexOf(char.toUpperCase());
        const isUpperCase = /[A-Z]/.test(char);
        const isLetter = /[a-zA-z]/.test(char);
        if (alphabetIndex >= 0 && alphabetIndex < 13) {
            result.push(isUpperCase ? alphabet[alphabetIndex+13] : alphabet[alphabetIndex+13].toLowerCase());
        }
        if (alphabetIndex >= 13 && alphabetIndex < 26) {
            result.push(isUpperCase ? alphabet[alphabetIndex-13] : alphabet[alphabetIndex-13].toLowerCase());
        }
        if (!isLetter) {
            result.push(char);
        }
    })
    return result.join('');
}

console.log(rot13('Hell'));
