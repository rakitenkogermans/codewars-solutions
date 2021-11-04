function josephusSurvivor(n,k){
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let index_splice = k - 1;
    let index = index_splice % arr.length;
    while (arr.length > 1) {
        arr.splice(index, 1);
        index = (index + index_splice) % arr.length;
    }
    return arr[0];
}

console.log(josephusSurvivor(7,3)) // 4
console.log(josephusSurvivor(11,19)) // 10
console.log(josephusSurvivor(1,300)) // 1
console.log(josephusSurvivor(14,2)) // 13
console.log(josephusSurvivor(100,1)) // 100
