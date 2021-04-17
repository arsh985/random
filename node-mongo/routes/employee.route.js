const express = require('express');
const app = express();

const router = express.Router();

const EmployeeSchema = require('./../model/employee.model');

router.get('/', (req, res) => {
    EmployeeSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get single user
router.get('/get/:id', (req, res) => {
    EmployeeSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Create user
router.post('/create',(req, res, next) => {
    EmployeeSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});



// Update user
router.put('/update/:id', (req, res, next) => {
    EmployeeSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            res.json({message: "Person with id " + req.params.id + " Updated."});
        }
    })
});

// Delete student
router.delete('/remove/:id', (req, res, next) => {
    EmployeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
            res.json({message: "Person with id " + req.params.id + " removed."});
        }
    })
});

module.exports = router;


