const matrixAddition = (a, b) => {
    const res = [];

    const cols = a.length;
    const rows = a[0].length;

    for (let i = 0; i < cols; i++) {
       res.push([]);
        for (let j = 0; j < rows; j++) {
            const sum = a[i][j] + b[i][j];
            res[i].push(sum);
        }
    }

    return res;
}

