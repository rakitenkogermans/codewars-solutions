const chained = (functions) => {
    return input => functions.reduce((res, func) => func(res), input);
}

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

console.log( chained([f1,f2,f3])(0)) // 4 )
console.log( chained([f1,f2,f3])(2)) // 36 )
console.log( chained([f3,f2,f1])(2)) // 12 )

console.log(chained([f4,f5,f6])("lorem ipsum")) // "merol_muspi")
