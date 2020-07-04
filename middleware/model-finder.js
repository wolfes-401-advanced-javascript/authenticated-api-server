'use strict';

/**
 * requires the schemas for use by Mongo
 */
const productSchema = require('../lib/models/products/products-schema');

const categorySchema = require('../lib/models/categories/categories-schema')

const Mongo = require('../lib/models/mongo.js');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * exports the getModel function to make the router dynamic
 */
module.exports = function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case 'products':
      req.model = new Mongo(productSchema);
      next();
      break;
      case 'categories':
        req.model = new Mongo(categorySchema);
        next();
        break;
        default:
          next('Wrong Model, dude!');
          break;
  }
}