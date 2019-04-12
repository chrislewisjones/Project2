module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    barname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING
    },
    rate: {
      type: DataTypes.DECIMAL
    }
  });
  return Review;
};
