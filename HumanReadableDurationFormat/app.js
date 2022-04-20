const formatDuration = (seconds) => {
    if (+seconds === 0) return 'now';
    let years, days, hours, minutes, second;
    let result = [];
    hours = Math.floor((seconds / 60) / 60);
    minutes = Math.floor((seconds - (hours * 60 * 60)) / 60);
    second = seconds - (hours * 60 * 60) - minutes * 60;
    days = Math.floor((hours / 24) % 365);
    years = Math.floor((hours / 24) / 365);
    hours = Math.floor(hours % 24);

    if (years > 0) {
        switch (years) {
            case 1:
                result.push(`${years} year`);
                break;
            default:
                result.push(`${years} years`);
        }
    }

    if (days > 0) {
        switch (days) {
            case 1:
                result.push(`${days} day`);
                break;
            default:
                result.push(`${days} days`);
        }
    }

    if (hours > 0) {
        switch (hours) {
            case 1:
                result.push(`${hours} hour`);
                break;
            default:
                result.push(`${hours} hours`);
        }
    }

    if (minutes > 0) {
        switch (minutes) {
            case 1:
                result.push(`${minutes} minute`);
                break;
            default:
                result.push(`${minutes} minutes`);
        }
    }

    if (second > 0) {
        switch (second) {
            case 1:
                result.push(`${second} second`);
                break;
            default:
                result.push(`${second} seconds`);
        }
    }
    result = result.join(', ').split('').reverse().join('').replace(',', ' and'.split('').reverse().join('')).split('').reverse().join('');
    return result;
}

console.log(formatDuration(0));
console.log(formatDuration(5));
console.log(formatDuration(60));
console.log(formatDuration(300));
console.log(formatDuration(86399));
console.log(formatDuration(359999));
console.log(formatDuration(31536000));
