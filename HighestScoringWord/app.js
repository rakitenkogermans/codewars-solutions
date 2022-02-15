const high = (x) => {
    const scores = x
        .split(' ')
        .map((val, i) => {
            const score = val
                .split('')
                .reduce((acc, val, i) => {
                    acc += val.charCodeAt(0) - 96;
                    return acc;
                },0);
            return {word: val, score};
        }, {})
        .sort((a, b) => {
            if (a.score > b.score)
                return -1;
            if (a.score === b.score)
                return 0;
            return 1;
        });
    return scores[0].word;
}

console.log(high('man i need a taxi up to ubud')) //, 'taxi');
console.log(high('what time are we climbing up the volcano')) //, 'volcano');
console.log(high('take me to semynak')) //, 'semynak');
console.log(high('aa b')) //, 'aa');
console.log(high('b aa')) //, 'b');
console.log(high('bb d')) //, 'bb');
console.log(high('d bb')) //, 'd');
console.log(high('aaa b')) //, 'aaa');
