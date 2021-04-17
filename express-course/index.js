const express = require('express');
const path = require('path');
//const members = require('./routes/api/members')
//const members = require('./public/Members')
const logger = require('./middleware/logger')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// members API routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, ()=>{
    console.log(`Server Running on : ${PORT}`);
})