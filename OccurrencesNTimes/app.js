const deleteNth = (arr,n) => {
    const occurrences = {};
    const result = arr.filter(val => {
        occurrences[val] = occurrences[val] ? occurrences[val] + 1 : 1
        if (occurrences[val] <= n) {
            return true;
        } else {
            return false;
        }
    })
    return result;
}

console.log(deleteNth([20,37,20,21], 1)) //, [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) //, [1, 1, 3, 3, 7, 2, 2, 2])
