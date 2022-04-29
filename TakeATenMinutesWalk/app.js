const isValidWalk = (walk) => {
    const north = walk.filter(item => item === "n").length;
    const south = walk.filter(item => item === "s").length;
    const east = walk.filter(item => item === "e").length;
    const west = walk.filter(item => item === "w").length;

    return walk.length === 10 && north === south && east === west;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // 'should return true');
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // 'should return false');
console.log(!isValidWalk(['w'])) // 'should return false');
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // 'should return false');
