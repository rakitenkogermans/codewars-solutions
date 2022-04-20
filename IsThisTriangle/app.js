const isTriangle = (a,b,c) => {
    // Use the Triangle Inequality Theorem, which states that the sum of two side lengths
    // of a triangle is always greater than the third side. If this is true for all three
    // combinations of added side lengths, then you will have a triangle.
    return a + b > c &&
        a + c > b &&
        b + c > a;
}

console.log(isTriangle(7,2,2))
