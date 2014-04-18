function Asset () {

  this.modelName = "Asset";

  this.properties = {
    name: String,
    type: String
  };

  this.options = {};

};

Asset.prototype.define = function (db) {
  return db.define(this.modelName, this.properties, this.options);
};

module.exports = Asset;
