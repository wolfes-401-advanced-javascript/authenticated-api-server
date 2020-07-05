'use strict';

const CategoryModel = require('../lib/models/categories/categories-collection.js');
const ProductModel = require('../lib/models/products/products-collection.js');

function getModel(request, response, next) {
  let model = request.params.model;

  switch (model) {
  case 'products':
    request.model = new ProductModel();
    next();
    break;
  case 'categories':
    request.model = new CategoryModel();
    next();
    break;
  default:
    next('Invalid Model');
    break;
  }

}

module.exports = getModel;