// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const User = require('./models/User')

// const path = require('path');

// const app = express();

// app.use(express.urlencoded({extended : true}));
// app.use(express.json());
// app.use(morgan("dev"));

// app.use(cookieParser());
// app.use(
//     session ({
//         key : 'user_sid',
//         secret : "Shhhh, this is secret.",
//         resave : false,
//         saveUninitialized : false,
//         cookie : {
//             expires : 60000
//         }
//     })
// )

// //MIDDLEWAREs
// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//       res.clearCookie("user_sid");
//     }
//     next();
//   });


//   var sessionChecker = (req, res, next) => {

//       if (req.session.user && req.cookies.user_sid) {
//           res.redirect('/dashboard')
//       }
//       else {
//           next();
//       }
//   }

//   app.get('/', sessionChecker,( req, res) => {
//     res.redirect('/login')
// });

// // LOGIN ROUTE
// app.route("/login")
//   .get(sessionChecker, (req, res) => {
//     res.sendFile(__dirname + "/public/login.html");
//   })

//   // SIGNUP ROUTE
// //   app.route("/signup")
// //   .get(sessionChecker, (req, res) => {
// //     res.sendFile(__dirname + "/public/signup.html");
// //   })
// //   .post((req, res) => {
// //         var user = new User({
// //             username : req.body.username,
// //             email : req.body.email,
// //             password : req.body.password
// //         })
// //         user.save((err, docs) => {
// //             if (err) {
// //                 res.redirect('/signup')
// //             }
// //             else{
// //                 console.log(docs);
// //                 req.session.user = docs;
// //                 res.redirect('/dashboard');
// //             }
// //         }) 
// //   })

//   app
//   .route("/signup")
//   .get(sessionChecker, (req, res) => {
//     res.sendFile(__dirname + "/public/signup.html");
//   })
//   .post((req, res) => {
//       var user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password:req.body.password,
//     });
//     user.save((err, docs) => {
//       if (!err) {
//         console.log(docs)
//         req.session.user = docs;
//         console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa')
//         res.redirect("/dashboard");
//       } else {
//         res.redirect('/login')
//       }
//     });
//   });

//   // route for  Login
// app
// .route("/login")
// .get(sessionChecker, (req, res) => {
//   res.sendFile(__dirname + "/public/login.html");
// })
// .post(async (req, res) => {
//   var username = req.body.username,
//     password = req.body.password;

//     try {
//       var user = await User.findOne({ username: username }).exec();
//       if(!user) {
//           res.redirect("/login");
//       }
//       user.comparePassword(password, (error, match) => {
//           if(!match) {
//             res.redirect("/login");
//           }
//       });
//       req.session.user = user;
//       res.redirect('/dashboard');
//   } catch (error) {
//     console.log(error)
//   }
  
// });



// // route for dashboard
// // route for user's dashboard
// app.get("/dashboard", (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.sendFile(__dirname + "/public/dashboard.html");
//     } else {
//       res.redirect("/login");
//     }
//   }); 


//    user logout
// app.get("/logout", (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.clearCookie("user_sid");
//       res.redirect("/");
//     } else {
//       res.redirect("/login");
//     }
//   });
  
//   // route for handling 404
//   app.use(function (req, res, next) {
//     res.status(404).send("Sorry can't find that!");
//   });


// app.listen(3000, () => {
//     console.log('Server Running.......');
// });