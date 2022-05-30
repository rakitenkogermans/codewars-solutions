const decipherThis = str => {
    return str
        .replace(/\d+/g, val => String.fromCharCode(+val))
        .split(' ')
        .map(word => {
            if (word.length > 2) {
                const arr = word.split('');
                [arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];
                return arr.join('');
            }
            return word;
        })
        .join(' ');
};

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) // 'Have a go at this and see how you do');
