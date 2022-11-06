'use strict';

const data = require('../seeders-data/default-batteries');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('batteries', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('batteries', null, {});
  }
};
