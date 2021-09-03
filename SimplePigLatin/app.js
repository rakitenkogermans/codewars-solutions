function pigIt(str){
    let words_arr = str.split(' ');
    for (let i = 0; i < words_arr.length; i++) {
        if (
            words_arr[i] === '.' ||
            words_arr[i] === '?' ||
            words_arr[i] === '-' ||
            words_arr[i] === '!' ||
            words_arr[i] === ';' ||
            words_arr[i] === ':'
        ) {
            continue;
        } else {
            let word = words_arr[i];
            const letter = word[0];
            word = word.slice(1, words_arr[i].length);
            word += letter + 'ay';
            words_arr[i] = word;
        }
    }

    str = words_arr.join(' ');
    return str;
}

console.log(pigIt('Pig latin is cool'));
