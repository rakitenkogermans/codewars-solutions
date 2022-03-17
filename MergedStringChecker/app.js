const isMerge = (s, part1, part2) => {
    let indexPart1 = 0, indexPart2 = 0;
    for (let i =0; i < s.length; i++) {
        const tmp = s[i];
        if (part1[indexPart1] === tmp) {
            indexPart1++;
        } else if (part2[indexPart2] === tmp) {
            indexPart2++;
        } else {
            return false;
        }
    }
    return indexPart1 === part1.length && indexPart2 === part2.length;
}

console.log(isMerge('codewars', 'code', 'wars'));
console.log('---------------');
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log('---------------');
console.log(!isMerge('codewars', 'cod', 'wars'));
