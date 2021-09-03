function findShort(s){

    // Firstly we initialize array,
    // split given string into array by whitespace,
    // loop through this array
    // and push length of current word from this array to the array from the beginning.
    // Then sort this array and return first element of this array.
    
    let arr = [];
    let words_arr = s.split(' ');

    for (let i = 0; i < words_arr.length; i++) {
        arr.push(words_arr[i].length);
    }

    let shortest = arr.sort((a, b) => a - b);
    return shortest[0];
}

console.log(findShort('turns out random test cases are easier than writing out basic ones'));
