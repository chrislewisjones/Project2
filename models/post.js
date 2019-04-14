module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    name: {
      type: DataTypes.STRING,
      
    },
    bar_name: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    comment: {
      type: DataTypes.TEXT
    },
    rate: {
      type: DataTypes.STRING,
      isDecimal: true,
    
    },
    created_at: {
      type: DataTypes.DATE
    }
  });
  return Review;
};
