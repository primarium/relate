"use strict";
module.exports = function(sequelize, DataTypes) {
  var Relation = sequelize.define("Relation", {
    item1: {
      type: DataTypes.INTEGER
    },
    item1Type: {
      type: DataTypes.STRING
    },
    item2: {
        type: DataTypes.INTEGER
      },
      item2Type: {
        type: DataTypes.STRING
      },
      comments:{
          type:DataTypes.STRING
      },
      sigRating:{
          type:DataTypes.INTEGER
      }
  });
  return Relation;
};