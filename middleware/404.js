'use strict';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * exports the 404 error for use by the api
 */
module.exports = (req, res) => {
  console.log('__ERROR!__: Cannot ' + req.method + ' ' + req.path);
  res.status(404).send('Cannot ' + req.method + ' ' + req.path);
}