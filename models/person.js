"use strict";
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    fName: {
      type: DataTypes.STRING
    },
    lName: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return Person;
};
  