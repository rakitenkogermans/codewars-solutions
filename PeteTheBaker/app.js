const cakes = (recipe, available) => {
    let cakes = 0;
    for (const key in recipe) {
        if (!available[key]) {
            return 0;
        } else {
            const possibleCakeCount = Math.floor(available[key] / recipe[key]);
            if (cakes > possibleCakeCount) {
                cakes = possibleCakeCount;
            }
            if (cakes === 0) {
                cakes = possibleCakeCount;
            }
        }
    }
    return cakes;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // 0
