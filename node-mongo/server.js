const createError = require('http-errors');

let  
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    
    bodyParser = require('body-parser'),
    dbConfig = require('./db/database');


    // Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useCreateIndex: true ,
    useUnifiedTopology: true 
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

// Setting up express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// function auth(req, res, next){
//     console.log(req.headers);

//     var authHeader = req.headers.authorization;

//     if (!authHeader) {
//         var err = new Error('You r not Authenticated...');

//         res.setHeader('WWW-Authenticate', 'Basic');
//         res.status(401);
//         return next(err);
//     }

//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');

//     var username = auth[0];
//     var password = auth[1];

//     if (username ==='admin' && password === 'password'){
//         next();
//     }else {
//         var err = new Error('You r not Authenticated...');

//         res.setHeader('WWW-Authenticate', 'Basic');
//         res.status(401);
//         return next(err);

//     }


// }

// app.use(auth);

const userRoute = require('./routes/employee.route');
const { Buffer } = require('buffer');
app.use('/api', userRoute);

// Create port
const port = process.env.PORT || 8080;

// Conectting port
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));