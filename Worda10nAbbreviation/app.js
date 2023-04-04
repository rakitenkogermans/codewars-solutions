const abbreviate = (str) => {
    return str.replace(/\w{4,}/g, (word) =>  word[0] + (word.length - 2) + word[word.length - 1] );
}

console.log(abbreviate("internationalization")) // "i18n");
console.log(abbreviate("accessibility")) // "a11y");
console.log(abbreviate("Accessibility")) // "A11y");
console.log(abbreviate("elephant-ride")) // "e6t-r2e");
