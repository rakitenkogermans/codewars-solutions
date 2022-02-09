const toCamelCase = (str) => {
    if (!str)
        return '';
    return str
        .match(/[a-zA-Z]+/g)
        .map((val, i) => {
            if (i === 0)
                return val;
            return val[0].toUpperCase() + val.slice(1);
        })
        .join('');
}

console.log(toCamelCase('')) //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")) //, "ABC", "toCamelCase('A-B-C') did not return correct value")
