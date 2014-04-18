function Locale () {
  this.modelName = "Locale";

  this.properties = {
    name: String,
  };

  this.options = {
    id: "location_number"
  };
}

Locale.prototype.define = function (db) {
  return db.define(this.modelName, this.properties, this.options);
}

module.exports = Locale;
