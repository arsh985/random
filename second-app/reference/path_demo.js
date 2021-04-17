const  path = require('path');

// BAse File Name 
console.log(path.basename(__filename));

// Dir Name 
console.log(path.dirname(__filename));

// Dir NAme 
console.log(__dirname);

//File extension
console.log(path.extname(__filename));

// Create Path Object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// join
console.log(path.join(__filename, 'hello', 'html'));
