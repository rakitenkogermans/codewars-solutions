const numberOfPairs = (gloves) => {
    const uniqueGloves = [...new Set(gloves)];
    const glovesArr = [];
    let result = 0;
    uniqueGloves.forEach((glove) => {
        const gloveCount = gloves.reduce((acc, val) => val === glove ? ++acc : acc + 0, 0);
        glovesArr.push({[glove]: gloveCount, count: gloveCount});
    });
    glovesArr.forEach((glove) => {
        const count = Math.floor(glove.count / 2);
        result += count;
    });
    return result;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])) // 2 (1 red pair + 1 blue pair)
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"])) // 3 (3 red pairs)
