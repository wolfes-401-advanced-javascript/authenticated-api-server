'use strict';

const schema = require('./categories-schema.js');
const Model = require('../mongo.js');

class Category extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Category;