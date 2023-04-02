const isLetter = (char) => (/[a-zA-Z]/).test(char);
const isDigit = (char) => (/[0-9]/).test(char);

const playPass = (s, n) => {
    const charArr = s.toLowerCase().split('');
    const encoded = charArr.map((c, index) => {
        if (isDigit(c)) {
            const tmp = 9 - (+c);
            return tmp;
        }

        if (isLetter(c)) {
            let tmp = c.charCodeAt(0) + n;
            tmp = tmp <= 'z'.charCodeAt(0) ? String.fromCharCode(tmp) : String.fromCharCode(tmp - 26);
            return index % 2 === 0 ? tmp.toUpperCase() : tmp.toLowerCase();
        }
        return c;
    })
        .reverse()
        .join('');
    return encoded;
}

console.log(playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
