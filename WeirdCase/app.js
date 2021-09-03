function toWeirdCase(string){

    // Split string into array of words.
    // Create empty array where we push new weird case word.
    // Loop through array of words. Then loop through each word
    // and check character index is odd or even.
    let words_arr = string.split(' ');
    let result = [];
    for (let i = 0; i < words_arr.length; i++) {
        let word = words_arr[i];
        let new_word = '';
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                new_word += word[j].toUpperCase();
            } else {
                new_word += word[j].toLowerCase();
            }
        }
        result.push(new_word);
    }
    return result.join(' ');
}

console.log(toWeirdCase('This is a test'));
