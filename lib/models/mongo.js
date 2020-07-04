'use strict';

/**
 * creates a class for mongodb and outlines each of the methods it will use
 */
class Mongo {
  constructor(schema) {
    this.schema = schema;
  }

  read(_id) {
    let searchParam = _id ? {_id} : {};
    return this.schema.find(searchParam);
  }

  create(data) {
    let newEntry = new this.schema(data);
    return newEntry.save(newEntry);
  }

  update(_id, data) {
    return this.schema.findByIdAndUpdate(_id, data);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Mongo;