const solution = (str) => {
    if (str.length % 2 === 1) {
        str += '_';
    }
    const result = [];
    for (let i = 0; i < str.length; i+=2){
        result.push(str.slice(i, i + 2));
    }
    return result;
}

console.log(solution("abcdef")) // ["ab", "cd", "ef"]);
console.log(solution("abcdefg")) // ["ab", "cd", "ef", "g_"]);
console.log(solution("")) // []);
