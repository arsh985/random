const express = require('express');
const Employee = require('./../model/user_model');
const app = express();

const router = express.Router();

// CREATE USER....
router.post('/', (req, res) => {
    
    let employee = new Employee();
//     if (!employee.id || !employee.name || !employee.email || !employee.salary){
//         return res.status(400).json({msg : "Required field can not be empty."})
//     }
// else{
    employee.id = req.body.id;
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.salary = req.body.salary;

// }

employee.save(function(){
    if (err) {
        console.log(err);
    }else{
        res.send('User Added Successfully');
    }
})

   
})

// Get All EMployees
router.get('/', (req, res) =>{
    Employee.find({}, function(err, employee){
        if (err) {
            console.log(err);
        }else{
            res.send(employee);
        }
    })
})

module.exports = router;