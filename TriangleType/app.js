const triangleType = (a, b, c) =>{
    const max = Math.max(a, b, c);

    if (a + b + c <= 2 * max)
        return 0; // Not triangle
    if (2 * max * max === a * a+ b * b + c * c)
        return 2; // Right
    if (2 * max * max >  a * a + b * b + c * c)
        return 3; // Obtuse

    return 1; // Acute
}

console.log(triangleType(7,3,2)) // 0); // Not triangle
console.log(triangleType(2,4,6)) // 0); // Not triangle
console.log(triangleType(8,5,7)) // 1); // Acute
console.log(triangleType(3,4,5)) // 2); // Right
console.log(triangleType(7,12,8)) // 3); // Obtuse
