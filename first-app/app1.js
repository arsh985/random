const eventEmitter = require('events');
//const emitter = new eventEmitter();



const Logger = require('./logger1');
const logger = new Logger();

//register a listener
logger.on('messageLogged', (arg)=> {
    console.log('Listening....', arg);
});

logger.log('message');


//HTTP MODULE>.....

const http = require('http');


const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.write('HELLO WORLD...');
            res.end();
        }

        if (req.url === '/api/courses'){
            res.write(JSON.stringify([1,2,3,4,5,6,7,8,9,0]));
            res.end();
        }
});

// server.on('connection', (socket) =>{
//     console.log('New connection....');
// })

server.listen(3000);

console.log('Listening the port 3000...')