const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    salary: {
        type: Number,
        required : true
    }
}, 
{
   collection: 'employee'
}
)

module.exports = mongoose.model('EmployeeSchema', employeeSchema)