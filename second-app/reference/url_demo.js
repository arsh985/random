const url = require('url');

const myUrl = new URL('http://mywebsite:8000/hello.html?id=100&status=active');

console.log(myUrl.href);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.toString());

console.log(myUrl.searchParams);

console.log(myUrl.hostname);

myUrl.searchParams.append('abc', '123');

console.log(myUrl.searchParams);

myUrl.searchParams.forEach((name, value) => {
console.log(`${name} : ${value}`);
})

console.log(myUrl.host);
