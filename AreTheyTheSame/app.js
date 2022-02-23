const comp = (array1, array2) => {
    if (!array1 || !array2){
        return false
    }
    let flag = true;
    for (const value of array1) {
        const valuePow = value * value;
        const multIndex = array2.indexOf(valuePow);
        if (multIndex !== 0) {
            array2.splice(multIndex, 1);
        } else {
            flag = false;
            break;
        }
    }
    return flag;
}

a1 = [6, 7, 10, 1, 9, 8, 2, 5, 10, 6, 8, 1, 0, 1, 9];
a2 = [1, 81, 25, 1, 100, 81, 0, 1, 36, 64, 64, 36, 100, 4, 49];
console.log(comp(a1, a2)) //

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2)) //, true);
