'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        role: 'SUPER_ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'CLIENT',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Roles', null, {});
  }
};
