'use strict';

const base64 = require('base-64');

const UserModel = require('../lib/models/users/users-model.js');

async function basicAuth(request, response, next) {
  

  // strings from our auth header
  let [authtype, authString] = request.headers.authorization.split(' ');
  let [username, password] = base64.decode(authString).split(':');

  let user = await UserModel.authenticateUser(username, password);

  if (user) {
    request.user = user;
    next();
  } else {
    next('Invalid login');
  }

  return 0;
}

module.exports = basicAuth;