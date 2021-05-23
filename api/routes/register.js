const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Require User Schema
let User = require('../models/user_schema');

//Render Register Page
router.get('/register', (req, res, next) => {
   res.status(201).render('register', {title: 'Register'});
});

//Post Users
router.post('/register', (req, res, next) => {

   //Check for Errors
   req.checkBody('name', 'Name is required!').notEmpty();
   req.checkBody('email', 'Email is not valid!').isEmail();
   req.checkBody('username', 'Username is required!').notEmpty();
   req.checkBody('password', 'Password is required!').notEmpty();
   req.checkBody('password2', 'Password is not match!').equals(req.body.password);

   let errors = req.validationErrors();
   if (errors) {
      console.log(errors);
   } else {
      User.find({email: req.body.email})
      .exec()
      .then(user => {
         if (user.length >= 1) {
            console.log(`duplicate email id!`);
            res.status(500).send('error', {message: 'duplicate email id!'});
         } else {
            User.find({username: req.body.username})
            .exec()
            .then(user => {
               if (user.length >= 1) {
                  console.log(`duplicate username!`);
                  res.status(500).send('error', {message: 'duplicate username!'});
               } else {
                  bcrypt.genSalt(10, (err, salt) => {
                     if (err) {
                        res.status(500).send('error', {message: 'Server Error!'});
                     } else {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                           if (err) {
                              res.status(500).send('error', {message: 'Server Error!'});
                           } else {
                              let user = new User({
                                 _id: new mongoose.Types.ObjectId(),
                                 name: req.body.name,
                                 email: req.body.email,
                                 username: req.body.username,
                                 password: hash
                              });
                              return user
                              .save()
                              .then(user => {
                                 console.log(user);
                                 res.status(200).send('You are doing a great job')
                              })
                              .catch(err => {
                                 res.status(500).send('error', {message: 'Server Error!'});
                                 console.log(err.message);
                              });
                           }
                        });
                     }
                  });
               }
            })
            .catch(err => {
               res.status(500).render('error', {error: err});
               console.log(err.message);
            });
         }
      })
      .catch(err => {
         res.status(500).render('error', {error: err});
         console.log(err.message);
      });
   }
});


module.exports = router;
