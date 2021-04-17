const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        msg : "Welcome to JWT Api Authentication"
    });
});

app.post('/api/posts',verifyToken,(req, res) => {

    jwt.verify(req.token, 'secretkey', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                msg : "Post Has Been Created SuccessFully...",
                data
        });
        }
  });
});


app.post('/api/login', (req, res) => {

const user = {
    id : 1, 
    name : "arsh", 
    email : "arsh@gmail.com"
}

    jwt.sign({user} , 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
});


function verifyToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(' ');

        const bearerToken = bearer[1];

        req.token = bearerToken;

        next();

    }else{
        res.sendStatus(403);
    }
}

app.listen(3000, () => {
    console.log("Server Running At 3000");
});