'use strict';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * exports the timestamp for use by the logger
 */
const timeStamp = function (req, res, next) {
  const d = new Date(Date.now());
  req.timeStamp = d;
  next();
}

module.exports = timeStamp;