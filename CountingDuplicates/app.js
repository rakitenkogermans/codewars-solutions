function duplicateCount(text){
    if (text.length === 0) return 0;

    let map = new Map();
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1)
        } else {
            map.set(text[i], 1);
        }
    }

    let result = 0;
    for (let [key, value] of map) {
        if (value > 1) result++;
    }
    return result;
}

console.log(duplicateCount("aabBcde"));
