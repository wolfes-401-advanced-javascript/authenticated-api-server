'use strict';

/**
 * requires mongoose for the db
 */
const mongoose = require('mongoose');

/**
 * defines the schema for the db
 */
const categoriesSchema = new mongoose.Schema(
  {
    name: {type: String, require: true},
    display_name: {type: String, require: true},
    description : {type: String, require: true}
  }
)

/**
 * exports the schema for use by the model-finder
 */
module.exports = mongoose.model('categories', categoriesSchema);