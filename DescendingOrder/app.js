const descendingOrder = (n) => {
    // Firstly convert to string, then split into array of char,
    // then sort, then merge back into string and return as integer
    let newN = n.toString().split('').sort((a,b) => {return b - a;}).join('');
    return +newN;
}

const res = descendingOrder(123456889);

console.log(res);
