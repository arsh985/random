const mongoose = require('./../connection/db');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    addr : {
        type : String,
        required : true
    },
    password : {
        type : String,
    }
},
{
    collection: "user"
})

module.exports = mongoose.model('UserSchema', userSchema);