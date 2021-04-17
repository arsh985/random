const express = require('express');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose =require('mongoose'); 
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const UserModel = require('./models/User')
const mongURI = 'mongodb://localhost:27017/sessions'



mongoose.connect(mongURI, {
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true
})

    .then(res => {
        console.log('MongoDB connected')
    })
const app = express();


const store = new MongoDBSession({
    uri : mongURI,
    session : "mySessions"
})

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}))

app.use(session ({
    secret : "shaikh aj",
    resave : false, 
    saveUninitialized : false,
    store : store
}))




// app.get('/', (req, res) => {
//     console.log(req.session)
//     req.session.isAuth = true;
//     res.send('Hello , How are you??');
//     console.log(req.session.id)
// })

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/login");
    }
  };

app.get('/', (req,res) => {
    res.render('landing');
})


app.get('/login', (req,res) => {
    res.render('login');
})



app.post('/login',async (req,res) => {

const { email, password } = req.body;

const user = await UserModel.findOne({ email });

  if (!user) {
    return res.redirect('/login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.redirect("/login");
  }

  req.session.isAuth = true;
  res.redirect('/dashboard');
});



app.get('/register', (req,res) => {
    res.render('register');
})


app.post('/register',async (req,res) => {

    const {username , email, password } = req.body;

    let user = await UserModel.findOne({email});

    if (user) {
        res.redirect('/register');
    }

    const hashedPsw = await bcrypt.hash(password, 12);

    user = new UserModel ({
        username,
        email,
        password : hashedPsw
    })

    await user.save();

    res.redirect('/login')
});



app.get('/dashboard',isAuth, (req,res) => {
    res.render('dashboard');
})

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/login");
    });
  });



app.listen(3000, () => {
    console.log('App running... on 3000')
})