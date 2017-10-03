"use strict";
module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    strAddress: {
      type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    stateProv:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    }
  });
  return Place;
};