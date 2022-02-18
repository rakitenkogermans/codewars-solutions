const queueTime = (customers, n) => {
    const checkoutTills = [...Array(n)].map(x => 0);
    customers.forEach((val, i) => {
        const tillIndex = checkoutTills.indexOf(Math.min.apply(null, checkoutTills));
        checkoutTills[tillIndex] += val;
    })
    const totalTime = Math.max.apply(null, checkoutTills);
    return totalTime;
}

console.log(queueTime([], 1)) // 0);
console.log(queueTime([1,2,3,4], 1)) // 10);
console.log(queueTime([2,2,3,3,4,4], 2)) // 9);
console.log(queueTime([1,2,3,4,5], 100)) // 5);
