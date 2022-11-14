'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Categories', 'primaryCategoryId');
    await queryInterface.dropTable('Primary_Categories');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Primary_Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.addColumn('Categories', 'primaryCategoryId',{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Primary_Categories',
            key: 'id'
        }
      });
  }
};
