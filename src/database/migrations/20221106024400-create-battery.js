'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('batteries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serial_number: {
        type: Sequelize.STRING
      },
      current_power: {
        type: Sequelize.DOUBLE
      },
      bike_id: {
        type: Sequelize.INTEGER
      },
      station_id: {
        type: Sequelize.INTEGER
      },
      total_distance: {
        type: Sequelize.DOUBLE
      },
      total_power: {
        type: Sequelize.DOUBLE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('batteries');
  }
};