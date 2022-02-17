const validBraces = (braces) => {
    const stack = []
    for (let i = 0; i < braces.length; i++) {
        if ( braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
            stack.push(braces[i])
        } else {
            if(stack.length === 0)
                return false;
            const lastBrace = stack[stack.length - 1];
            if( (braces[i] === ']' && lastBrace === '[') || (braces[i] === '}' && lastBrace === '{') || (braces[i] === ')' && lastBrace === '(')) {
                stack.pop();
            } else {
                break;
            }
        }
    }
    return stack.length === 0
}

console.log(validBraces( "()" )) //, true);
console.log(validBraces( "[(])" )) //, false);
