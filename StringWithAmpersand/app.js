const list = (names) => {
    let str = '';
    let arr1 = names.map((k) => {
        return k.name;
    });
    const len = arr1.length;
    let arr2 = [...arr1];

    //console.log(arr1[len - 1]);
    if (len > 2) {
        arr2 = arr1.slice(0, len - 1);
        str = arr2.join(', ');
        str += ` & ${arr1[len - 1]}`;
    }
    if (len === 2) {
        str = arr1.join(' & ');
    }
    if (len === 1) {
        str = arr1[0];
    }
    return str;
}

const res = list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);

console.log(res);

// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// // returns 'Bart, Lisa & Maggie'

// list([{ name: 'Bart' }, { name: 'Lisa' }])
// // returns 'Bart & Lisa'

// list([{ name: 'Bart' }])
// // returns 'Bart'

// list([])
// // returns ''
