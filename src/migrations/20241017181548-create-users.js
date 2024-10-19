'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      'firstName': {
        type: Sequelize.STRING,
        allowNull: false,
      },
      'lastName': {
        type: Sequelize.STRING,
        allowNull: true,
      },
      'phoneNumber': {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: /^\+?[1-9]\d{1,14}$/,
        },
      },
      'email': {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};