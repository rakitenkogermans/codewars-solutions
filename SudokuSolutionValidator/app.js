const sequenceChecker = (sequence) => {
    const validSeq = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return sequence.every((num, i) => num === validSeq[i]);
}

const checkRows = (matrix) => {
    let arr = matrix.map(seq => seq.sort());
    return arr.every(seqArr => sequenceChecker(seqArr));
}

const checkColumns = (matrix) => {
    let columnMatrix = [[], [], [], [], [], [], [], [], []];
    matrix.forEach(row => row.forEach((num, i) => columnMatrix[i].push(num)));
    return checkRows(columnMatrix);
}

const makeBox = (matrix, rowOne, colOne) => {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[rowOne + (Math.trunc(i/3))][colOne + (i%3)]);
    }
    return arr;
}

const checkBoxes = (matrix) => {
    let boxesMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        boxesMatrix.push(makeBox(matrix, Math.trunc(i / 3) * 3, (i % 3) * 3));
    }
    return checkRows(boxesMatrix);
}

function validSolution(board){
    const checker = [
        checkRows(JSON.parse(JSON.stringify(board))),
        checkColumns(JSON.parse(JSON.stringify(board))),
        checkBoxes(JSON.parse(JSON.stringify(board)))
    ];
    if (checker.every(seq => seq))
        return true;
    else
        return false;
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])) //, true);

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]])) //, false);
