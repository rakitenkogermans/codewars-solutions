const componentToHex = (c) => {
    if (c > 255) c = 255;
    if (c < 0) c = 0;
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgb = (r, g, b) => {
    return componentToHex(r).toUpperCase() + componentToHex(g).toUpperCase() + componentToHex(b).toUpperCase();
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300,255,255));
console.log(rgb(173,255,47));
