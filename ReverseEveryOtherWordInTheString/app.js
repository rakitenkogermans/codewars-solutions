const reverse = (str) => {
    return str.split(' ').map((w, i) => i % 2 === 1 ? w.split('').reverse().join('') : w).join(' ').trim();
}

console.log(reverse("Reverse this string, please!")) //  "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!")) // "I yllaer don't ekil reversing !sgnirts")
