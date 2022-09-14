'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Primary_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Primary_Category.hasMany(models.Category, {
        foreignKey: 'primaryCategoryId'
      })
    }
  };
  Primary_Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'Primary_Categories',
    modelNmae: 'Primary_Category'
  });
  return Primary_Category;
};