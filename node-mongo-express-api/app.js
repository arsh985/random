const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');

path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app.get('/', (req, res) => {
//     res.send('Congratulations!, You r doing Great!.')
// });

app.use('/api/employees', require('./routes/user_routes'));

app.listen(3000, () => {
    console.log('the Server is Running on port 3000');
});