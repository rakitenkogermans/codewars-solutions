const alphanumeric = (string) => {
    return /^[a-z0-9]+$/gi.test(string);
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
console.log(alphanumeric("9831983"));
