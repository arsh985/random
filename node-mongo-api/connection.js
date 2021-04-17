var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/api';

MongoClient.connect(url, function(err, db){
    if (err)  throw err;
//     var myObj = [{name : "aqib", age : 24, addr : "vadgaon"},
//                  {name : "sachin", age : 01, addr : "kolkata"},
//                  {name : "saqib", age : 22, addr : "sangli"},
//                  {name : "atul", age : 10, addr : "mumbai"}
//                 ];

//   db.collection("emp").insert(myObj, function(err, res){
//       if (err) throw err;
//     console.log(res.insertedCount + ' Record inserted...');
//     db.close();
//     });

    // db.collection('emp').findOne({}, function(err, result){
    //     if (err) throw err;
    //     console.log(result.age);
    //     db.close();
    // });

    // db.collection('emp').find({}).toArray(function(err, result){
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

// var query = {addr : "kolahpur"};
// db.collection('emp').find(query).toArray(function(err, result){
//     if (err) throw err;
//     console.log(result);
//     db.close();
// });

//     var mysort = {name : 1};
//     db.collection('emp').find().sort(mysort).toArray(function(err, result){
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });

var myObj = {addr : "vadgaon"};
    db.collection('emp').remove(myObj, function(err, obj){
        if (err) throw err;
        console.log('File Deleted..');
        db.close();
    })
})