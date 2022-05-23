const solve = (s) => {
    const arr = s
        .replace(/[aeiuo]/g, " ")
        .split(" ")
        .map(substr => substr
                .split("")
                .map(val => val.charCodeAt() - 96)
                .reduce((acc, b) => acc + b, 0)
        );
    return Math.max(...arr);
}

console.log(solve("zodiac")) // 26);
console.log(solve("chruschtschov")) // 80);
console.log(solve("khrushchev")) // 38);
console.log(solve("strength")) // 57);
console.log(solve("catchphrase")) // 73);
console.log(solve("twelfthstreet")) // 103);
console.log(solve("mischtschenkoana")) // 80);
