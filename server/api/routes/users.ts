const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
import validateRegistrationInput from '../../validator/register';
import { validateLogInInput } from '../../validator/login';
import { User } from '../../models/users';

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegistrationInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        return res.status(200).json({
          email: 'Email already exists'
        })
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
})

router.post("/login", (req, res) => {
  console.log('req', req.body)
  const { errors, isValid } = validateLogInInput(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ 
        emailnotfound: "Email not found" 
      });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };
        jwt.sign(
          payload,
          keys.key.secretOrKey,
          {
            expiresIn: 31556926 
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ 
          passwordincorrect: "Password incorrect" 
        });
      }
    });
  });
});

module.exports = router;
