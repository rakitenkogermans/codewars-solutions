const capitalize = ([first, ...rest]) => {
    if (typeof first === "undefined") return '';
    return first.toUpperCase() + rest.join('');
}

const generateHashtag = (str) => {
    const hashtag = str.replace(/\s+/g, ' ').split(' ').map(value => capitalize(value)).join('');
    if (hashtag.length >= 140 || str.length === 0 || hashtag.length === 0) {
        return false;
    }
    return '#' + hashtag;
}

console.log(generateHashtag('Do We  have A     Hashtag'));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag(''));
console.log(generateHashtag('Codewars'));
