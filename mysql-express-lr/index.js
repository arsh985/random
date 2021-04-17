const express=require("express");
const bodyParser=require('body-parser');


const app = express();


var authenticateController=require('./src/users/controllers/authenticate-controller');
var registerController=require('./src/users/controllers/register-controller');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.listen(3000);