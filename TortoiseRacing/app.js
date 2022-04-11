const race = (v1, v2, g) => {
    if (v1 >= v2)
        return null;
    const time = Math.floor(g * 3600 / (v2 - v1));
    const h = Math.floor(time / 3600);
    const mn = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return [h, mn, s];
}

console.log(race(720, 850, 70)) // [0, 32, 18])
console.log(race(80, 91, 37)) // [3, 21, 49])
console.log(race(80, 100, 40)) // [2, 0, 0])
