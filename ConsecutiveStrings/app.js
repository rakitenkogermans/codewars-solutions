const longestConsec = (strarr, k) => {
    if (k < 1 || k > strarr.length) {
        return '';
    }
    let resultStr = '';
    for (let i = 0; i <= strarr.length - k; i++) {
        const strSlice = strarr.slice(i, i + k);
        const sliceJoin = strSlice.join('');
        if (sliceJoin.length > resultStr.length) {
            resultStr = sliceJoin;
        }
    }
    return resultStr;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) // "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)) // "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) // "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) // "")
