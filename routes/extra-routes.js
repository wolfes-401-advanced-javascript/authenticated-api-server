'use strict';

const express = require('express');
const router = express.Router();
const bearerMiddleware = require('../middleware/bearer.js');
const permissions = require('../middleware/authorize.js');
const UserModel = require('../lib/models/users/users-model.js');
const User = new UserModel();

router.get('/secret', bearerMiddleware, (req, res) => {
  res.send(req.user);
});

router.get('/read', bearerMiddleware, permissions('read'), (req, res) => {
  res.send('Route /read worked');
});

router.post('/add', bearerMiddleware, permissions('create'), (req, res) => {
  res.send('Route /add worked');
});

router.put('/change', bearerMiddleware, permissions('update'), (req, res) => {
  res.send('Route /change worked');
});

router.delete('/remove', bearerMiddleware, permissions('delete'), (req, res) => {
  res.send('Route /remove worked');
});






module.exports = router;
