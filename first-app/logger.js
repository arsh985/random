//     var url = 'http://logger.io/log'

//     function log(message) {
//         //send an HTTP request
//         console.log(message);
//     }

//   //  module.exports.log = log;
//   module.exports = log;


// console.log(__filename);
// console.log(__dirname);
var url = 'http://logger.io.log'

function log(message) {
    //send an HTTP request
    console.log(message);
}

module.exports.log = log;
//module.exports = log;