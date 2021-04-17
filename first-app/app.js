// function sayHello(name){
//     console.log("Hey Hiiii, "+ name);
// }
// sayHello("Arsh");

// function say(name) {
//     console.log("Hello, "+ name);
// }
// say("Arshiyan");

// function hello(hello) {
//     console.log("Hello World! "+ hello);
// }
// hello(" How R You");

// console.log(module);

// var logger = require('./logger');

// // logger.log(logger);
// logger.log('message');

// const log = require('./logger');

// log('message');

var logger = require('./logger');

logger.log(logger);
logger.log('message');

// var log = require('./logger');

// log('message');

// //PATH MODULE EXAMPLE
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);


// //OS MODULE EXAMPLE
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();


// console.log(`FreeMemory: ${totalMemory}`);
// console.log(`totalMemory: ${freeMemory}`);

// //FILESYSTEM MODULE EXAMPLE
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function (err, files) {
//     if (err) console.log('ERRRRRROR', err);
//     else console.log('RESULT', files);
    
// });

//EVENTS MODULE

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listener...
emitter.on('messageLogged', (arg)=>{
    console.log('listening....', arg);
})

emitter.on('messageLogged', function(arg) {
    console.log('Listener Called..', arg);
});


//Raise an Event
emitter.emit('messageLogged', {id : 101, url : "http://"});

exports.myDateTime = function(){
    return Date();
}