const encrypt = (text, n) => {
    if (n < 1 || !text)
        return text;
    const odd = text.split('').filter((_, i) => i % 2 === 1).join('');
    const even = text.split('').filter((_, i) => i % 2 === 0).join('');
    return encrypt(odd + even, n - 1);
}

const decrypt = (encryptedText, n) => {
    if (n < 1 || !encryptedText)
        return encryptedText;
    const middle = encryptedText.length / 2;
    const left = encryptedText.split('').slice(middle);
    const right = encryptedText.split('').slice(0, middle);
    const arr = [];
    encryptedText.split('').forEach((val, i) => {
        if (i % 2 === i - 1) {
            arr.push(right[i]);
            arr.push(left[i]);
        } else {
            arr.push(left[i]);
            arr.push(right[i]);
        }
    });
    return decrypt(arr.join(''), n - 1);
}

console.log(encrypt("This is a test!", 0)) // "This is a test!");
console.log(encrypt("This is a test!", 1)) // "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2)) // "s eT ashi tist!");
console.log(encrypt("This is a test!", 3)) // " Tah itse sits!");
console.log(encrypt("This is a test!", 4)) // "This is a test!");
console.log(encrypt("This is a test!", -1)) // "This is a test!");
console.log(encrypt("This kata is very interesting!", 1)) // "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0)) // "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1)) // "This is a test!");
console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!");
console.log(decrypt(" Tah itse sits!", 3)) // "This is a test!");
console.log(decrypt("This is a test!", 4)) // "This is a test!");
console.log(decrypt("This is a test!", -1)) // "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) // "This kata is very interesting!");
