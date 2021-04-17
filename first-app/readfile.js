const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //reading File readFile()
    fs.readFile('demofile.html', (err, data) => {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);
        res.end();
    });
});

//Creating new File appendFile()
fs.appendFile('hello.txt', 'hello Shaikh Aj ', function(err){
    if (err) throw err;
    console.log('SAVED.');
});

//Opening File or creating new One open()
fs.open('hello1.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('saved 1 file.')
;});

//Create New File writeFile()
fs.writeFile('hello1.txt', 'Hello how r u???', function(err){
    if (err) throw err;
    console.log('file replaced');
});
 
//update method appendFile()
fs.appendFile('hello2.txt', " This is my text.", function(err){
    if (err) throw err;
    console.log('File Updated...');
});

//update method writeFile()
fs.writeFile('hello1.txt', "I have Replaced all Material", function(err){
    if (err) throw err;
    console.log('Replaced.');
});

//Delete file Using unlink()
fs.unlink('hello2.txt', function(err){
    if (err) throw err;
    console.log('File deleted SuccessFully.')
})

// //Renaming File Using rename()
// fs.rename('helloArsh', 'hello1.txt', function(err){
//     if (err) throw err;
//     console.log('File Renamed.');
// });

server.listen(port, hostname, (req, res) => {
    console.log('Server running on http://' + hostname + ":" + port + '/');
});