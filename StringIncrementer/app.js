function incrementString (string) {
    // console.log('input string ', string);
    var digits_arr =  string.match(/\d/g);
    if (digits_arr !== null) {
        var a = digits_arr;
        digits_arr = parseInt(digits_arr.join(''));
        var tmp = (digits_arr + 1).toString().split('');
        if (tmp.length === a.length) {
            a.join('');
            string = string.slice(0, string.length - tmp.length) + (digits_arr + 1);
        }
        string = string.slice(0, string.length - tmp.length) + (digits_arr + 1);
    } else {
        string = string + 1;
    }
    return string;
}


console.log(incrementString("foobar000"));
console.log(incrementString("foobar100"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString("foobar00999"));
console.log(incrementString(""));
