const isPangram = (string) => {

    // Write string with all alphabet letters. Create map if this letters and set value to 0 for all.
    // Loop through passed string as a parameter and check if that character with lower case has in map, if it is, then increase value by one.
    // Then loop through map and check for value of 0 and return false.
    // If hasnt 0 so string is pangram.
    const alphabet_letters = 'abcdefghijklmnopqrstuvwxyz';
    let letters_map = new Map();
    for (let i = 0; i < alphabet_letters.length; i++) {
        letters_map.set(alphabet_letters[i], 0)
    }

    for (let i = 0; i < string.length; i++) {
        if (letters_map.has(string[i].toLowerCase())) {
            letters_map.set(string[i].toLowerCase(), letters_map.get(string[i].toLowerCase()) + 1)
        }
    }

    for (let [key, value] of letters_map.entries()) {
        if (value === 0) return false;
    }
    return true;
}

console.log(isPangram('This is not a pangram.'));

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//         return string.indexOf(x) !== -1;
//     });
// }
