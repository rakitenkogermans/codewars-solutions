const to_nato = (words) => {
    return words
        .replace(/\s/g, '')
        .split('')
        .map(letter => NATO[letter.toLowerCase()] ? NATO[letter.toLowerCase()] : letter)
        .join(' ');
}

console.log(to_nato('If you can read')) //, "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
console.log(to_nato('Did not see that coming')) //, "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
console.log(to_nato('go for it!')) //,"Golf Oscar Foxtrot Oscar Romeo India Tango !");
