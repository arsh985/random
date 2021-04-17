// var fs = require('fs');
// // var data = '';

// var readerStream = fs.createReadStream('output.txt');

// // readerStream.setEncoding('utf-8');

// // readerStream.on('data', function(chunk){
// //     data += chunk;
// // });

// // readerStream.on('end', function(){
// //     console.log(data);
// // });

// // readerStream.on('err', function(err){
// //     console.log(err.stack);
// // });

// // console.log('Program Ended...');

// // var fs = require('fs');

// // var data = "A solution to all problem is only one just of yourself."

// var writerStream = fs.createWriteStream('input.txt');

// // writerStream.write(data, 'utf-8');

// // writerStream.end();

// // writerStream.on('finish', function(){
// //     console.log('Write Finish...');
// // });

// // writerStream.on('err', function(err){
// //     console.log(err.stack);
// // });

// readerStream.pipe(writerStream);

// console.log('Program Ended...');

// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('input.txt')
//     .pipe(zlib.Gzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
 
//    console.log('File Compressed.')    


var fs = require("fs");  
var zlib = require('zlib');

   fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

    console.log('Program Ended/ File Unzipped');

// var fs = require("fs");  
// var zlib = require('zlib');  
// // Decompress the file input.txt.gz to input.txt  
// fs.createReadStream('input.txt.gz')  
//   .pipe(zlib.createGunzip())  
//   .pipe(fs.createWriteStream('input.txt'));  
//   console.log("File Decompressed.");  