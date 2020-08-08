'use strict';

const { values } = require("sequelize/types/lib/operators");
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('pessoas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      nivel_user: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      senha: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};
