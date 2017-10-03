"use strict";
module.exports = function(sequelize, DataTypes) {
  var Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return Thing;
};