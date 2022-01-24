const scramble = (str1, str2) => {
    const savedIndexes = {};
    let isMatch = false;
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        const startingLetterIndex = (savedIndexes[letter] + 1) || 0;
        const matchIndex = str1.indexOf(letter, startingLetterIndex);
        isMatch = matchIndex > -1;
        if (!isMatch) break;
        savedIndexes[letter] = matchIndex;
    }
    return isMatch;
}

console.log(scramble('rkqodlw','woorld')) // true
console.log(scramble('cedewaraaossoqqyt','codewars')) // true);
console.log(scramble('katas','steak')) // false);
console.log(scramble('scriptjava','javascript')) // true);
console.log(scramble('scriptingjava','javascript')) // true);
console.log(scramble('scriptsjava','javascripts')) // true);
console.log(scramble('jscripts','javascript')) // false);
console.log(scramble('aabbcamaomsccdd','commas')) // true);
