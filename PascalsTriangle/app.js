const pascalsTriangle = (depth) => {
    const result = [];
    for (let i = 0; i < depth; i++ ) {
        const row = [];
        for (let j = 0; j <= i; j++ ) {
            switch(j) {
                case 0: row.push(1); break;
                case i: row.push(1); break;
                default: row.push(result[i-1][j] + result[i-1][j-1]);
            }
        }
        result.push(row);
    }
    return result.flat();
}

console.log(pascalsTriangle(1)) // [1],"1 level triangle incorrect");
console.log(pascalsTriangle(2)) // [1,1,1],"2 level triangle incorrect");
console.log(pascalsTriangle(4)) // [1,1,1,1,2,1,1,3,3,1],"4 level triangle incorrect");
console.log(pascalsTriangle(6)) // [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1],"6 level triangle incorrect");
