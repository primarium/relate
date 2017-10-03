"use strict";
module.exports = function(sequelize, DataTypes) {
  var Happening = sequelize.define("Happening", {
    name: {
      type: DataTypes.STRING
    },
    Description: {
      type: DataTypes.STRING
    },
    dateTime: {
      type: DataTypes.INTEGER
    }
  });
  Happening.associate = function(models){
    Happening.belongsTo(models.Place);
    Happening.belongsTo(models.Person);
  };

  return Happening;
};