const inArray = (array1, array2) => {
    const result = [];
    array1.forEach(val => {
        array2.forEach(str => {
            if (str.includes(val) && result.indexOf(val) === -1)
                result.push(val);
        })
    })
    return result.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2)) // ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)) // ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2)) // [])
