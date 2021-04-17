const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/workdb',{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log('dataBASE connected...successfully');
})

module.exports = mongoose;