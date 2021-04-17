const fs = require('fs');
const path = require('path');

//Creating File...
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if (err) throw err;
//     console.log('File Created...');
// });

//create and write file...

// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), "Hello World!", function(err){
//         if (err) throw err;
//         console.log('File Written to');

//         // Append file
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'), "I Love Node JS", function(err){
//                 if (err) throw err;
//                 console.log('File Written to');
//             }
//         );
//     }
// );

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
});

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err){
    if (err) throw err;
    console.log('File Renamed');
});
