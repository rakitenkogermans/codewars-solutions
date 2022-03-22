const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const titleCase = (title, minorWords) => {
    if (title === '')
        return '';
    const titleArr = title.toLowerCase().split(' ');
    const minorArr = minorWords ? minorWords.toLowerCase().split(' ') : [];

    return titleArr
        .map((str, index) => {
            if (index === 0)
                return capitalize(str);
            if (minorArr.indexOf(str) === -1)
                return capitalize(str)
            return str
        })
        .join(' ');
}

console.log(titleCase('')) // '')
console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows')
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox')
