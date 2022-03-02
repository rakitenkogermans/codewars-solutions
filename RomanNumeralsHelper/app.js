const RomanNumerals = {
    romans: [
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
    ],
    getNumber: function (romanGlyph) {
        return this.romans.flat()[this.romans.flat().findIndex(el => el === romanGlyph) - 1];
    },
    toRoman: function (number) {
        let result = "";
        for(let i = 0; i < this.romans.length; i++) {
            const glyph = this.romans[i][1];
            const limit = this.romans[i][0];
            // while given number is bigger or equal than limit (romans number from array)
            while(number >= limit) {
                result += glyph;
                number -= limit;
            }
        }
        return result;
    },
    fromRoman: function(roman) {
        let value = 0;

        for (var i = 0; i < roman.length; i++) {
            const two = this.getNumber(roman[i]+roman[i+1]);
            const one = this.getNumber(roman[i]);
            if (typeof two !== "undefined") {
                value += two;
                i++;
            } else if (typeof one !== "undefined") {
                value += one;
            }
        }
        return value;
    }
}

console.log(RomanNumerals.toRoman(1000)) //, 'M');
console.log(RomanNumerals.toRoman(4)) //, 'IV');
console.log(RomanNumerals.toRoman(1)) //, 'I');
console.log(RomanNumerals.toRoman(1990)) //, 'MCMXC');
console.log(RomanNumerals.toRoman(2008)) //, 'MMVIII');

console.log(RomanNumerals.fromRoman('XXI')) //, 21);
console.log(RomanNumerals.fromRoman('I')) //, 1);
console.log(RomanNumerals.fromRoman('IV')) //, 4);
console.log(RomanNumerals.fromRoman('MMVIII')) //, 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI')) //, 1666);
