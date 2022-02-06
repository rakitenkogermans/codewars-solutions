function add(a) {
    let currentSum = a;

    function addF(b) {
        currentSum += b;
        return addF;
    }
    addF.toString = function() {
        return currentSum;
    };
    return addF;
}

console.log(add(1)) // == 1);
console.log(add(1)(2)) // == 3);
console.log(add(1)(2)(3)) // == 6);
