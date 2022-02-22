const stockList = (listOfArt, listOfCat) => {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return '';
    }
    const accurencies = {};
    listOfCat.forEach(val => {
        listOfArt.forEach(word => {
            if (val === word[0]) {
                accurencies[val] = accurencies[val] ? accurencies[val] + +word.split(' ')[1] : +word.split(' ')[1];
            }
        })
        if (!accurencies[val])
            accurencies[val] = 0;
    });
    const resString = [];
    for (const [key, value] of Object.entries(accurencies)) {
        resString.push(`(${key} : ${value})`);
    }
    return resString.join(' - ');
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c));

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c));
