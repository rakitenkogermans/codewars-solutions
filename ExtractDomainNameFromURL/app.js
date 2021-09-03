function domainName(url){
    if (url.indexOf('http') === 0 || url.indexOf('https') === 0) {
        const url_domain = url.split('://')[1];
        if (url_domain.indexOf('www') === 0) {
            const domain_name = url_domain.split('.')[1];
            return domain_name.toString();
        }
        const domain_name = url_domain.split('.')[0];
        return domain_name.toString();
    } else if (url.indexOf('www') === 0) {
        const domain_name = url.split('.')[1];
        return domain_name.toString();
    } else {
        const domain_name = url.split('.')[0];
        return domain_name.toString();
    }
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("http://www.g7efhah.us/error"))
