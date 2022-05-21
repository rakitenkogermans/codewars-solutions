const deepCount = (a) => {
    return a.reduce((acc, val)=> acc + (Array.isArray(val) ? deepCount(val) : 0), a.length);
}

console.log(deepCount([])) // 0, "Expected 0")
console.log(deepCount([1, 2, 3])) // 3, "Expected 3")
console.log(deepCount(["x", "y", ["z"]])) // 4, "Expected 4")
console.log(deepCount([1, 2, [3, 4, [5]]])) // 7, "Expected 7")
console.log(deepCount([[[[[[[[[]]]]]]]]])) // 8, "Expected 8")
