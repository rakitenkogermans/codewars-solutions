const findNb = m => {
    let output = 1;
    let check = 0;
    while(check <= m) {
        check += output**3;
        if (check === m)
            return output;
        output += 1;
    }
    return -1;
}

console.log(findNb(4183059834009)) // 2022)
console.log(findNb(24723578342962)) // -1)
console.log(findNb(135440716410000)) // 4824)
console.log(findNb(40539911473216)) // 3568)
