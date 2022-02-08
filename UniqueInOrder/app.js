const uniqueInOrder = (iter) => {
    iter = Array.isArray(iter) ? iter : iter.split('');
    return iter.filter((val, i, arr) => {
        if (val === arr[i + 1])
            return false;
        return true;
    })
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) //        == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3])) //      == [1,2,3]
