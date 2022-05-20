const KEYPAD = {
    'A': 1,
    'D': 1,
    'G': 1,
    'J': 1,
    'M': 1,
    'P': 1,
    'T': 1,
    'W': 1,
    '*': 1,
    '#': 1,
    ' ': 1,
    '1': 1,
    'B': 2,
    'E': 2,
    'H': 2,
    'K': 2,
    'N': 2,
    'Q': 2,
    'U': 2,
    'X': 2,
    '0': 2,
    'C': 3,
    'F': 3,
    'I': 3,
    'L': 3,
    'O': 3,
    'R': 3,
    'V': 3,
    'Y': 3,
    'S': 4,
    'Z': 4,
    '2': 4,
    '3': 4,
    '4': 4,
    '5': 4,
    '6': 4,
    '8': 4,
    '7': 5,
    '9': 5
}

const presses = (phrase) => {
    return phrase.split('').reduce((acc, letter) => KEYPAD[letter.toUpperCase()] ? acc + KEYPAD[letter.toUpperCase()] : acc, 0);
}

console.log(presses("LOL")) // 9, "should work for simple examples")
console.log(presses("HOW R U")) // 13, "should work for phrases with spaces")
