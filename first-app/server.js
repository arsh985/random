const http = require('http');
const dt = require('./app');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(req.url);
    res.write("The date and time are currently: " + dt.myDateTime()); 
    res.end('\nHello World\n');
});

var path = require("path");
console.log(
  `Full path: ${__filename} and filename is ${path.basename(__filename)}`
);

server.listen( port, hostname, function(){
    console.log("Server running at http://" + hostname + ":" + port + "/");
})

// server.listen(port, hostname, function () {
//     console.log("Server running at http://" + hostname + ":" + port + "/");
//   });