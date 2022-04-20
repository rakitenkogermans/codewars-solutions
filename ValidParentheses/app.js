const validParentheses = (parens) => {

    if (parens.length % 2 !== 0) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);

    for (let i = 0 ; i < parens.length ; i += 1) {
        if (map.has(parens[i])) {
            stack.push(map.get(parens[i]));
        } else if (parens[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(validParentheses('()()()()()()()()()()(('))
