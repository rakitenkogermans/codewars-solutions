const firstNonRepeatingLetter = (s) => {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i].toLowerCase())) {
            map.set(s[i].toLowerCase(), map.get(s[i].toLowerCase()) + 1);
        } else {
            map.set(s[i].toLowerCase(), 1);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i].toLowerCase()) === 1) {
            return s[i];
        }
    }
    return '';
}

console.log(firstNonRepeatingLetter('aa'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
console.log(firstNonRepeatingLetter('sTreSS'));
