const sepStr = (str) => {
    const splittedStr = str.split(' ');
    const columns = splittedStr.length;
    const rows = splittedStr.reduce((acc, val) => {
        if (val.length > acc)
            return val.length;
        return acc;
    }, 0)
    const result = Array.from({length: rows},() => new Array(columns).fill('')).map((row, rIndex) => row.map((col, cIndex) => splittedStr[cIndex].length > rIndex ? splittedStr[cIndex][rIndex] : col));
    return result;
}

console.log(sepStr("Just Live Life Man"));
    //    [['J','L','L','M'],
    //     ['u','i','i','a'],
    //     ['s','v','f','n'],
    //     ['t','e','e','']]

console.log(sepStr("The Mitochondria is the powerhouse of the cell"))
    //    [[ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    //     [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    //     [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    //     [ '', 'o', '', '', 'e', '', '', 'l' ],
    //     [ '', 'c', '', '', 'r', '', '', '' ],
    //     [ '', 'h', '', '', 'h', '', '', '' ],
    //     [ '', 'o', '', '', 'o', '', '', '' ],
    //     [ '', 'n', '', '', 'u', '', '', '' ],
    //     [ '', 'd', '', '', 's', '', '', '' ],
    //     [ '', 'r', '', '', 'e', '', '', '' ],
    //     [ '', 'i', '', '', '', '', '', '' ],
    //     [ '', 'a', '', '', '', '', '', '' ]]);
