'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('bikes', 'dist_reading', {
      type: Sequelize.DOUBLE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('bikes', 'dist_reading')
  }
};
