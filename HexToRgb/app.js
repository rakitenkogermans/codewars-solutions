const hexStringToRGB = (hexString) => {
    // regex to check if hex string is in correct format
    // and then apply exec method on this regex and pass hex string
    // as a parameter.
    // If it finds a match, it returns a result array, otherwise it returns null.
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

console.log(hexStringToRGB("#FF9933"));
