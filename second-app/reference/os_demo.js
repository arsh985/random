const os = require('os');
const { prototype } = require('../person');

// PLATFORM
console.log('platform : '+ os.platform());

// CPU ARCH
console.log("Arsh : "+ os. arch());

// CpU
console.log(os.cpus());

// HOMEDIR

console.log("HOMEDIR : "+ os.homedir());

//hostname 
console.log('hostname : '+ os.hostname());

//total mem
console.log('totalmem : '+ os.totalmem());