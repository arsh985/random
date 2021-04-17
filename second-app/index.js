const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('CALLED LISTENER', data));

logger.log('Hello World!');

logger.log('Hiii');

logger.log('how r u???');