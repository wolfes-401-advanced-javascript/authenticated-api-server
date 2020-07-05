'use strict';

/**
 * defines the Products class and all the methods used
 */
class Products {
  constructor(schema) {
    this.schema = schema;
  }
  
  read(_id) {
    let searchParam = _id ? {_id} : {};
    return schema.find(searchParam);
  }

  create(data) {
    let newEntry = new schema(data);
    return newEntry.save(newEntry);
  }

  update(_id, data) {
    return schema.findByIdAndUpdate(_id, data);
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
}

/**
 * exports the Products class for use by the api
 */
module.exports = Products;
