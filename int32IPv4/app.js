const int32ToIp = (int32) => {
    if (int32 === 0) return '0.0.0.0';
    let binary = int32.toString(2);

    const result = [
        binary.slice(0,8),
        binary.slice(8,16),
        binary.slice(16,24),
        binary.slice(24,32)
    ].map(octet => parseInt(octet,2)).join('.');

    return result;
}

console.log(int32ToIp(2154959208)) //, "128.114.17.104", "wrong ip for interger: 2154959208")
console.log(int32ToIp(0)) //, "0.0.0.0", "wrong ip for integer: 0")
console.log(int32ToIp(2149583361)) //, "128.32.10.1", "wrong ip for integer: 2149583361")
