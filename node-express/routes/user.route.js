const express = require('express');
const { find } = require('./../model/user');
const UserSchema = require('./../model/user')

const app = express();
const router = express.Router();



// GET METHOD
router.get('/', function(req, res){
    UserSchema.find((err, data) =>{
        if (err) {
           return next(err);
        }else{
            res.json(data);
        }
    });
});


//GET BY ID METHOD
router.get('/get/:id', function(req, res){
    UserSchema.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        }else{
            res.json(data);
        }
    });
});

//CREATE USER/ POST METHOD

router.post('/add', (req, res, next) => {
    UserSchema.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        }else{
            res.json(data);
            console.log('User Added Successfully!');
        }
    });
});

//UPDATE METHOD / PUT METHOD
router.put('/put/:id', (req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {$set : req.body}, (err, data) => {
        if (err) {
            return next(err);
        }else{
            res.json(data);
            console.log('Record Updated Successfully.');
        }
    });
});

//DELETE METHOD
router.delete('/del/:id', (req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        }else{
            //res.status(200).json({msg : data});
            console.log('Record Deleted Successfully');
        }
    });
});

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}




module.exports = router;
