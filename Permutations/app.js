const permutations = (string) => {
    if (!!string.length && string.length < 2 ){
        return [string]
    }
    let permutationsArr = [];
    for (let i = 0; i < string.length; i++){
        let char = string[i];
        if (string.indexOf(char) !== i) {
            continue;
        }
        let remainder = string.slice(0, i) + string.slice(i + 1, string.length);
        for (const permutation of permutations(remainder)){
            permutationsArr.push(char + permutation)
        }
    }
    return permutationsArr;
}

console.log(permutations('a')) //, ['a']);
console.log(permutations('ab').sort()) //, ['ab', 'ba'].sort());
console.log(permutations('aabb').sort()) //, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
