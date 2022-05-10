const amountOfPages = (summary) => {
    if (summary <= 9)
        return summary;
    let count = 0;
    let result = 0;
    for (let i = 1; i < summary; i++) {
        count += i.toString().length;
        if (count === summary) {
            result = i;
            break;
        }
    }
    return result;
}

console.log(amountOfPages(5)) // 5)
console.log(amountOfPages(25)) // 17)
console.log(amountOfPages(1095)) // 401)
console.log(amountOfPages(185)) // 97)
console.log(amountOfPages(660)) // 256)
