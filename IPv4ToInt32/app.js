const ipToInt32 = (ip) => {
    return ip.split('.').reduce((acc, int, index) => acc + int * (256 ** (3 - index)), 0);
}

console.log(ipToInt32("128.32.10.1")) // 2149583361
