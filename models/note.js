"use strict";
module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  });
  return Note;
};