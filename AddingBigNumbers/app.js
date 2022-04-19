const add = (a, b) => {

    // Before proceeding further, make
    // sure length of b is larger.
    if (a.length > b.length) {
        let t = a;
        a = b;
        b = t;
    }

    // Take an empty String for storing result
    let str = "";

    // Calculate length of both String
    let n1 = a.length, n2 = b.length;

    // Reverse both of Strings
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");

    let carry = 0;
    for(let i = 0; i < n1; i++) {

        // Do school mathematics, compute sum of
        // current digits and carry
        let sum = ((a[i].charCodeAt(0) - '0'.charCodeAt(0)) + (b[i].charCodeAt(0) - '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 + '0'.charCodeAt(0));

        // Calculate carry for next step
        carry = Math.floor(sum / 10);
    }

    // Add remaining digits of larger number
    for(let i = n1; i < n2; i++) {
        let sum = ((b[i].charCodeAt(0) - '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 + '0'.charCodeAt(0));
        carry = Math.floor(sum / 10);
    }

    // Add remaining carry
    if (carry > 0) {
        str += String.fromCharCode(carry + '0'.charCodeAt(0));
    }
    // reverse resultant String
    str = str.split("").reverse().join("");
    return str;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

