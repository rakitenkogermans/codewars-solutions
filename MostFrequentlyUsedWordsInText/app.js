const topThreeWords = (text) => {
    let regex = ".*[a-zA-Z].*";
    if (text.match(regex)) {
        const wordsArr = text
            .split(' ')
            .map(word => word = word.replace(/[/.,]/g, '').toLowerCase())
            .filter(val => val ? true : false);

        const occurrencies = wordsArr.reduce((acc, val) => (acc[val] = acc[val] ? acc[val] + 1 : 1, acc), {});
        const sortedOccurrencies = Object.entries(occurrencies)
            .map(([key, val]) => ({key, count: val}))
            .sort((a, b) => b.count - a.count)
            .filter((_, index) => index < 3 ? true : false)
            .map(val => val.key);
        return sortedOccurrencies;
    } else {
        return [];
    }
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")) //, ['e','d','a'])
console.log(topThreeWords("a a c b b")) //, ['a','b','c'])
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")) //,['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't ")) //, ["won't", "wont"])
console.log(topThreeWords("  , e   .. ")) //, ["e"])
console.log(topThreeWords("  ...  ")) //, [])
console.log(topThreeWords("The rat jumped in the CD of the CD")) //, ['the', 'cd', 'rat']
