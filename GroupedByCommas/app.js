const groupByCommas = (n) => {
    return n.toLocaleString();
}

// const groupByCommas = (n) => {
//     return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

console.log(groupByCommas(1)) // '1');
console.log(groupByCommas(10)) // '10');
console.log(groupByCommas(100)) // '100');
console.log(groupByCommas(1000)) // '1,000');
console.log(groupByCommas(10000)) // '10,000');
console.log(groupByCommas(100000)) // '100,000');
console.log(groupByCommas(1000000)) // '1,000,000');
console.log(groupByCommas(35235235)) // '35,235,235');
