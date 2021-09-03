function dataReverse(data) {
    let result = [];
    for (let i = 0; i < (data.length); i += 8) {
        let x = i + 8;
        result.unshift(data.slice(i, x));
    }
    data = [];
    for (let i = 0; i < result.length; i++) {
        data = data.concat(result[i]);
    }
    return data;
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1));
