var http = require('http');
var url = require('url');
var fs = require('fs');

http
    .createServer(function(req, res){
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     fs.readFile(filename, function( err, data){
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
})
.listen(8080);

var rs = fs.createReadStream('hello.txt');
    rs.on('open', function(){
        console.log('File Is Opening..')
    })

    //// EVENT EMITTER

    var events = require('events');
    var eventEmitter = new events.EventEmitter();

    var myEventHandler = function(){
        console.log('I have a scream');
    }

    // event listener
    eventEmitter.on('scream', myEventHandler)



    //RAise an event
    eventEmitter.emit('scream');