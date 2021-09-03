function nextBigger(n){
    var n_str = n + '';
    for (let i = n_str.length-1; i > 0; i--) {
        if (+n_str[i-1] < +n_str[i]) {
            let stop_digit = +n_str[i-1];
            let stop_index = i-1;
            let smallest_digit = 9999999;
            let smallest_digit_index = 9999999;
            for (let j = n_str.length-1; j > stop_index; j--) {
                if (+n_str[j] < smallest_digit && +n_str[j] > stop_digit) {
                    smallest_digit = +n_str[j];
                    smallest_digit_index = j;
                }
            }
            n_str = n_str.split('');
            let tmp = n_str[smallest_digit_index];
            n_str[smallest_digit_index] = n_str[stop_index];
            n_str[stop_index] = tmp;
            n_str = n_str.join('');
            let str_till_stop_digit = n_str.slice(0,i);
            let str_after_stop_digit = n_str.slice(i, n_str.length).split('').map(x => +x);
            str_after_stop_digit.sort((a, b) => {
                return a - b;
            });
            return +(str_till_stop_digit + str_after_stop_digit.join(''));
        }
    }
    return -1;
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(414));
console.log(nextBigger(144));
console.log(nextBigger(534976));
