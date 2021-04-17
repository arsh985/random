const EventEmitter = require('events');
// const emitter = new eventEmitter();

//var url = 'http://logger.io/log';

class Logger extends EventEmitter{

     log(message) {
        console.log(message);
    
        //raise an event
    this.emit('messageLogged', {id: 11, url: 'http://'});
    }
    
}


module.exports = Logger;