'use strict';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * exports the 500 error for use by the api
 */
module.exports = (req, res) => {
  console.log('__ERROR!__: 500');
  res.status(500).send('Internal Server Error');
}