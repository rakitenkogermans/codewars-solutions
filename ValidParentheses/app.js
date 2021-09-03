// function validParentheses(parens) {
//     if (0 <= parens.length && parens.length <= 100) {
//         let open_parentheses = (parens.match(/\(/g) || []).length;
//         let close_parentheses = (parens.match(/\)/g) || []).length;
//         return open_parentheses === close_parentheses;
//     }
//     return false;
// }

function validParentheses(parens)  {

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
