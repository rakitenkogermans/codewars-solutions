const incrementString = (string) => {
    if (string === null || string === undefined || string === '') {
        return '1';
    }
    const digits_arr =  string.match(/\d/g);
    const char_arr =  string.replace(/[0-9]/g, '');
    let str = string.slice(char_arr.length) || "0";
    str = (+str + 1).toString();
    if (digits_arr !== null) {
        if (digits_arr.length > str.length) {
            const tmp = digits_arr.splice(0, digits_arr.length - str.length).join('');
            return char_arr + tmp + str;
        }
        return char_arr + str;
    } else {
        return string + 1;
    }
}


console.log(incrementString("foobar000"));
console.log(incrementString("foobar100"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString("foobar00999"));
console.log(incrementString(""));
console.log(incrementString(null));
