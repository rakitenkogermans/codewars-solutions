const multiplicationTable = (size) => {
    let two_dim_arr = [];
    for (let i = 1; i <= size; i++) {
        let temp_arr = [];
        for (let j = 1; j <= size; j++) {
            temp_arr.push(j*i);
        }
        two_dim_arr.push(temp_arr);
    }

    return two_dim_arr;
}

console.log(multiplicationTable(3));
