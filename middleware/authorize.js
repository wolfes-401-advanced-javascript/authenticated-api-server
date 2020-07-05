'use strict';

const UserModel = require('../lib/models/users/users-model.js');
const User = new UserModel();

const permissions = (capability) => async (request, response, next) => {
  let userInfo = await User.getByName(request.user.username);
  let user = User;
  user.makeTempUser(userInfo);
  let hasPermission = await user.verifyPermissions(capability);
  if (hasPermission) {
    next();
  } else {
    next('Access Denied');
  }
};


module.exports = permissions;