const http = require('http');

http.createServer((req, res) => {
    res.write('Hello WORLD!');
    res.end();
}).listen(3000, () => console.log('Server Is Running....'));