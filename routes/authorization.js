'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware/basic.js');
const bearerMiddleware = require('../middleware/bearer.js');
const UserModel = require('../lib/models/users/users-model.js');
const User = new UserModel();

router.post('/signup', signUp);
router.post('/signin', auth, signIn);
router.get('/users', bearerMiddleware, getUsers);

async function signUp(req, res) {

  let userExists = await User.exists({ username: req.body.username });
  if (userExists) {
    res.send('user already exists');
    return;
  }
  let password = await UserModel.hashPassword(req.body.password);
  let newUser = await User.create({ username: req.body.username, password: password, role: req.body.role });
  if (newUser) {
    let token = UserModel.generateToken({ username: req.body.username });
    res.cookie('token', token);
    res.header('token', token);
    res.send(token);
  } else {
    res.status(403).send('invalid user');
  }
}

async function signIn(req, res) {
  if (req.user) {
    let token = await UserModel.generateToken({ username: req.user.username });
    res.cookie('token', token);
    res.header('token', token);
    res.send({ token, user: req.user });
  } else {
    res.status(403).send('Invalid');
  }
}

async function getUsers(req, res) {
  let userQuery = await User.get();
  res.send(userQuery);
}


module.exports = router;