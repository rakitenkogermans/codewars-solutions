const solution = (input, markers) => {
    const strArr = input.split("\n");
    for (const [index, str] of strArr.entries()) {
        markers.forEach(marker => {
            if (str.indexOf(marker) > -1) {
                const newStr = str.slice(0, str.indexOf(marker));
                strArr[index] = newStr.trim();
            }
        })
    }
    return strArr.join("\n").trim();
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])) //, "apples, plums\npears\noranges")
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])) //, "Q\nu\ne")
