const solution = (number) => {
    let result = 0;
    for (let i = 1; i < number; i++) {
        result += i % 3 === 0 || i % 5 === 0 ? i : 0;
    }
    return result;
}

console.log(solution(10)) // 23
