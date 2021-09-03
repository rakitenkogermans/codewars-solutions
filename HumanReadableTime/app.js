function humanReadable(seconds) {
     if (seconds <= 359999 ){
        let hours = Math.floor((seconds / 60) / 60);
        let minutes = Math.floor((seconds - (hours * 60 * 60)) / 60);
        let second = seconds - (hours * 60 * 60) - minutes * 60;
        hours = hours.toString().length === 1 ? '0' + hours : hours;
        minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
        second = second.toString().length === 1 ? '0' + second : second;
        return (hours + ":" + minutes + ":" + second);
    }
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(300));
console.log(humanReadable(86399));
console.log(humanReadable(359999));
