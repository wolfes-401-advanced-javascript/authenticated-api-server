'use strict';

/**
 * creates a class for mongodb and outlines each of the methods it will use
 */
class Mongo {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let searchParam = _id ? { _id } : {};
    return this.schema.find(searchParam)
      .then(result => {
        let formatted = {
          count: result.length,
          results: result
        }
        return formatted;
      })
      .catch(err => console.log(err));

  }

  getByName(username) {
    let searchParam = username ? { username } : {};
    return this.schema.find(searchParam)
      .then(result => {
        let formatted = result[0];
        return formatted;
      })
      .catch(err => console.log(err));

  }

  create(data) {
    let newObject = new this.schema(data);
    return newObject.save();
  }
  

  update(_id, data) {
    return this.schema.findByIdAndUpdate(_id, data);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

  exists(data){
    return this.schema.exists(data);
  }
}

module.exports = Mongo;