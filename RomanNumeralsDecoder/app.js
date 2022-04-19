const romans = [
    [1000, 'M'],
    [900, 'CM'],
    [500,  'D'],
    [400,  'CD'],
    [100,  'C'],
    [90,   'XC'],
    [50,   'L'],
    [40,   'XL'],
    [10,   'X'],
    [9,    'IX'],
    [5,    'V'],
    [4,    'IV'],
    [1,    'I']
];

const getNumber = (romanGlyph) => {
    return romans.flat()[romans.flat().findIndex(el => el === romanGlyph) - 1];
};

const solution = (roman) => {
    let value = 0;

    for (let i = 0; i < roman.length; i++) {
        const two = getNumber(roman[i]+roman[i+1]);
        const one = getNumber(roman[i]);
        if (typeof two !== "undefined") {
            value += two;
            i++;
        } else if (typeof one !== "undefined") {
            value += one;
        }
    }
    return value;
}
