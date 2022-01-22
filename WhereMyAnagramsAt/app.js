const anagrams = (word, words) => {
    let result = [];
    const sortedWord = word.split('').sort().join('');
    words.forEach(currWord => {
        if (sortedWord === currWord.split('').sort().join('')) {
            result.push(currWord);
        }
    })
    return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
