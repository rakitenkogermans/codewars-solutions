const isPalindrome = (str) => str === str.split('').reverse().join('');

const longestPalindrome = (s) => {
    if (s.length === 0) {
        return 0;
    }

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length + 1; j++) {
            if (isPalindrome(s.slice(i, j))) {
                const palindromeLength = s.slice(i, j).length;
                res = palindromeLength > res ? palindromeLength : res;
            }
        }
    }

    return res
}

console.log(longestPalindrome("a")) // 1)
console.log(longestPalindrome("aa")) // 2)
console.log(longestPalindrome("baa")) // 2)
console.log(longestPalindrome("aab")) // 2)
console.log(longestPalindrome("zyabyz")) // 6, "Are you sure that is a palindrome?")
console.log(longestPalindrome("baabcd")) // 4)
console.log(longestPalindrome("baablkj12345432133d")) // 9)
