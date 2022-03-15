const romans = [
    [1000, 'M'],
    [900,  'CM'],
    [500,  'D'],
    [400,  'CD'],
    [100,  'C'],
    [90,   'XC'],
    [50,   'L'],
    [40,   'XL'],
    [10,   'X'],
    [9,    'IX'],
    [5,    'V'],
    [4,    'IV'],
    [1,    'I']
];

const solution = (number) => {
    let result = "";
    for(let i = 0; i < romans.length; i++) {
        const glyph = romans[i][1];
        const limit = romans[i][0];
        // while given number is bigger or equal than limit (romans number from array)
        while(number >= limit) {
            result += glyph;
            number -= limit;
        }
    }
    return result;
}

console.log(solution(1)) //, 'I', '1 should, "I"')
console.log(solution(2)) //, 'II', '2 should, "II"')
console.log(solution(3)) //, 'III', '3 should, "III"')
console.log(solution(4)) //, 'IV', '4 should, "IV"')
console.log(solution(5)) //, 'V', '5 should, "V"')
console.log(solution(9)) //, 'IX', '9 should, "IX"')
console.log(solution(10)) //, 'X', '10 should, "X"')
console.log(solution(11)) //, 'XI')
console.log(solution(19)) //, 'XIX')
console.log(solution(22)) //, 'XXII')
console.log(solution(15)) //, 'XV')
