const findMissingLetter = (str) => {
    // Merge array of characters into string.
    // Get character code at first position of the string.
    // Compare characters and it index.

    str = str.join('');
    let i, j = 0, m = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;
}

console.log(findMissingLetter(['a','b','c','d','f']));
