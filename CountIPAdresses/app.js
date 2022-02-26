const ipToInt32 = (ip) => {
    return ip
        .split('.')
        .reduce((acc, val, i) => acc+val*Math.pow(256,3-i), 0);
}

const ipsBetween = (start, end) => {
    return ipToInt32(end) - ipToInt32(start);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")) //, 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0")) //, 246);
