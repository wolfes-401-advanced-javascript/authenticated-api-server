'use strict';

/**
 * requires mongoose for the db
 */
const mongoose = require('mongoose');

/**
 * defines the schema for the db
 */

const productsSchema = new mongoose.Schema(
  {
    category: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true}
  }
)

/**
 * exports the schema for use by the model-finder
 */
module.exports = mongoose.model('products', productsSchema);
