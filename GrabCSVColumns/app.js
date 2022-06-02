const csvColumns = (csv, indices) => {
    return  csv
        .split('\n')
        .map(row => row.split(','))
        .map(val => val.filter((rowVal, index) => indices.includes(index)))
        .filter(row => row.length)
        .join('\n');
}

console.log(csvColumns("1,2,3\n4,5,6" , [0, 1])) // "1,2\n4,5");
console.log(csvColumns("1,2\n3,4\n5,6", [5, 6, 7])) // "");
console.log(csvColumns("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j" , [1, 3, 5, 7])) // "b,d\n2,4\ng,i");
console.log(csvColumns("1\n2\n3\n4\n5" , [0, 1])) // "1\n2\n3\n4\n5");
console.log(csvColumns("1\n2\n3\n4\n5" , [1])) // "");
console.log(csvColumns("1,2,3,4,5,6,7,8,9" , [0, 2, 4, 6, 8])) // "1,3,5,7,9");
