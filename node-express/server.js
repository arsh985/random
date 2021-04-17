const express = require('express');
const path = require('path');
const mongoose = require('./connection/db');
const bodyParser = require('body-parser');
const { Buffer } = require('buffer');
const app = express();

app.use((req, res, next) => {
    console.log('%s', req);
    next();
   });

app.use(express.json());
app.use(express.urlencoded({extended : false}));

function auth(req, res, next) {
    console.log(req.headers);

    var authHeader = req.headers.authorization;

    if (!authHeader) {

        var err = new Error();
        res.setHeader('www-Authenticate', 'Basic');
        res.status(401).json({msg : "You ARE Not AUTHORIZED..."})
        next(err);
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');

    var username = auth[0];
    var password = auth[1];

    if ( username === "admin" && password === "password") {
        next();
    }else{
        var err = new Error();
        res.setHeader('www-Authenticate', 'Basic');
        res.status(401).json({msg : "You ARE Not AUTHORIZED..."})
        next(err);
    }


}
app.use(auth);


// app.use(auth);
// app.get('/', function(req, res){
//     res.send('Congratulations! You r doing great work...');
// });



app.use('/api/users', require('./routes/user.route'))

app.listen(3000);
    console.log('Server is running');