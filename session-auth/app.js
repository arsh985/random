const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const TWO_HOURS = 1000*60*60*2

const {
    PORT = 3000,

    SESS_NAME = "sid",
    SESS_SECRET = "Sshh, This is secret key",
    SESS_LIFETIME = TWO_HOURS
} = process.env

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
//app.use(express.json());

const users = [
    {id : 1, name : "arsh", email : "arsh@gmail.com", password : "password"},
    {id : 2, name : "iyan", email : "iyan@gmail.com", password : "password"},
    {id : 3, name : "arshiyan", email : "arshiyan@gmail.com", password : "password"},

]

app.use(session({
    name : SESS_NAME,
    resave : false,
    saveUninitialized : false,
    secret : SESS_SECRET,
    cookie : {
        maxAge : SESS_LIFETIME,
        sameSite : true,
        secure : false,
    }
}));

const redirectLogin = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/login');
    }else{
        next();
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home');
    }else{
        next();
    }
}

app.use((req, res, next) => {
    console.log('1111111111111111111')
    const { userId } = req.session
    console.log(req.session)
    if (userId) {
        console.log('999999999999999999')
        res.locals.user = users.find(
            user => user.id === userId);

    }
    next();
})


app.get('/', (req, res) => {

    console.log('2222222222222222222222')

    const { userId } = req.session;
    console.log(userId)
    console.log('88888888888888888')
    if(userId == null){
            res.redirect('/login');
    }
    //console.log(req.session);

    res.send(`
    <h1>WELCOME HOME</h1>
    ${userId ? `
    <a href='/home'>Home</a>
    <form method ='post' action ='/logout'>
    <button>LogOut</button>
    </form>
    ` : `
    <a href='/login'>Login</a>
    <a href='/register'>Register</a>`
    } 
     `)
})

app.get('/home',redirectLogin, (req, res) => {

    console.log('222222222222222222')
    console.log(res.locals)

    const { user } = res.locals

    res.send(`
    <h1>Home</h1>
    <a href ='/'>Main</a>
    <ul>
    <li> Name :  </li>
    <li> Email : </li>
    </ul>
    <form method ='post' action ='/logout'>
    <button>LogOut</button>
    </form>
    `)
})

// app.get('/profile', (req, res) => {
//     const {user} = res.locals;

// })

app.get('/login', redirectHome, (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form method ='post' action ='/login'>
    <input type = "email" name = "email" placeholder = "Email" required/>
    <input type = "password" name = "password" placeholder = "Password" required/>
    <input type = "submit" />
    </form>
    <a href ='/register'>Register</a>
    `)
})

app.get('/register',redirectHome, (req, res) => {
    res.send(`
    <h1>Register</h1>
    <form method = 'post' action = '/register'>
    <input type = "name" placeholder = "Name" required/>
    <input type = "email" name = "email" placeholder = "Email" required/>
    <input type = "password" name = "password" placeholder = "Password" required/>
    <input type = "submit" />
    </form>
    <a href = "/login">Login</a>
    `)
})

app.post('/login',redirectHome,  (req, res) => {
    const {email, password} = req.body;

    if (email && password) {
        const user = users.find(
            user => user.email === email && user.password === password
            )
            
    if (user) {
        req.session.userId = user.id;
         return res.redirect('/home');
            }
    }

    res.redirect('/login');
})

app.post('/register',redirectHome,  (req, res) => {
    
    const {name , email, password} = req.body;

    if (name && email && password) {
        const exists = users.some(
            user => user.email === email
            )

        if (!exists) {
            const user = {
                id : users.length + 1,
                name ,
                email,
                password
            }

            users.push(user);

            req.session.userId = user.id;

            return res.redirect('/home')
        }
    }

    res.redirect('/register');
})

app.post('/logout',redirectLogin,  (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home');
        }
        console.log('333444444444444444')
        console.log(SESS_NAME)
        res.clearCookie = SESS_NAME;
        console.log(SESS_NAME)

        res.redirect('/login');
    })
 })


app.listen(PORT, ()=> console.log(`Server Running on http://localhost:${PORT}`));