'use strict';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * exports the logger for use by the api
 */
module.exports = (req, res, next) => {
  console.log('__REQUEST__: ' + `${req.timeStamp}` + `${req.path}` + `${req.method}`);
  next();
}