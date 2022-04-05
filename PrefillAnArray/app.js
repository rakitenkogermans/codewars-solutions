const prefill = (n, v) => {
    if(n === 0 || n === '0')
        return [];
    if (!Number.isInteger(n) || n < 0 ){
        const err = new Error;
        err.name = "TypeError";
        err.message = n + " is invalid";
        throw err;
    }
    return new Array(n).fill(v);
}
