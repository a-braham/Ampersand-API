'use strict';

const data = require('../seeders-data/default-stations');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stations', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stations', null, {});
  }
};
