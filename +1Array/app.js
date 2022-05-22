const upArray = (arr) => {
    if (!Array.isArray(arr))
        return null;
    if (arr.length === 0)
        return null;
    if (arr.some(val => !Number.isFinite(val)))
        return null;
    if (arr.some(val => val < 0))
        return null;
    if (arr.some(val => val.toString().length > 1))
        return null;
    const tmp = arr[arr.length - 1] + 1;
    arr[arr.length - 1] = tmp;
    if (tmp.toString().length === 1)
        return arr;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].toString().length > 1) {
            const mod = arr[i] % 10;
            const div = Math.trunc(arr[i] / 10);
            arr[i] = mod;
            arr[i - 1] += div;
        }
    }
    if (arr[0].toString().length > 1) {
        const mod = arr[0] % 10;
        const div = Math.trunc(arr[0] / 10);
        arr[0] = mod;
        arr.unshift(div);
    }
    return arr;
}

console.log(upArray([2,3,9])) // [2,4,0]);
console.log(upArray([4,3,2,5])) // [4,3,2,6]);
console.log(upArray([1,-9])) // null);
