const automorphic = (n) => {
    const squared = n ** 2;
    return squared.toString().endsWith(n) ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(1)) // "Automorphic");
console.log(automorphic(3)) // "Not!!");
console.log(automorphic(6)) // "Automorphic");
console.log(automorphic(9)) // "Not!!");
console.log(automorphic(25)) // "Automorphic");
console.log(automorphic(53)) // "Not!!");
console.log(automorphic(76)) // "Automorphic");
console.log(automorphic(95)) // "Not!!");
console.log(automorphic(625)) // "Automorphic");
console.log(automorphic(225)) // "Not!!");
