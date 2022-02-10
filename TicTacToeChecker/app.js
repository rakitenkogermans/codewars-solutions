const isSolved = (board) => {
    board = [...board[0], ...board[1], ...board[2]];

    const xIndexes = board.map((val, i) => val === 1 ? i : '0').filter(val => val !== '0');
    const oIndexes = board.map((val, i) => val === 2 ? i : '0').filter(val => val !== '0');

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const arr of winningConditions) {
        console.log(arr)
        const [index1, index2, index3] = arr;
        if (xIndexes.includes(index1) && xIndexes.includes(index2) && xIndexes.includes(index3)) {
            return 1;
        }
        if (oIndexes.includes(index1) && oIndexes.includes(index2) && oIndexes.includes(index3)) {
            return 2;
        }
    }

    if (board.some(val => val === 0)) {
        return -1;
    }

    return 0;
}

console.log(isSolved([
    [0,0,1],
    [0,1,2],
    [2,1,0]
])) // === -1);

console.log(isSolved([
    [1,2,1],
    [1,1,2],
    [2,1,2]])) // === 0);

console.log(isSolved([
    [2,2,2],
    [0,1,1],
    [1,0,0]
])) // === 2);
