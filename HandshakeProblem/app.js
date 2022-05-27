const getParticipants = h => {
    let k = 1;
    for(let i = 0; i < h; i += k++);
    return k;
}

console.log(getParticipants(0)) // 1)
console.log(getParticipants(1)) // 2)
console.log(getParticipants(3)) // 3)
console.log(getParticipants(6)) // 4)
console.log(getParticipants(7)) // 5)
