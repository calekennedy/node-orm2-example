function Person () {

  this.modelName = "Person";

  this.properties = {
    firstName: String,
    lastName: String,
    age: Number
  };

  this.options = {
    methods: {
      fullName: function () {
          return this.name + ' ' + this.surname;
      }
    }
  };

};

Person.prototype.define = function (db) {
  return db.define(this.modelName, this.properties, this.options);
};

module.exports = Person;
