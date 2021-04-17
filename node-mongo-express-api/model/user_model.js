const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

let employeeSchema = mongoose.Schema({
    id : {
        type : String,
        required: true,
     },
     name : {
         type : String,
         required : true,
     },
     email : {
         type : String,
         required : true,
         unique: true,
     },
     salary : {
         type : Number,
         required : true,
     }

});

let Employee = module.exports = mongoose.model('Employee', employeeSchema);