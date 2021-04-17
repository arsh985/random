const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log('Connected Succesfully.')
});

mongoose.exports = mongoose;