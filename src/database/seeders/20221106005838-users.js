'use strict';

const data = require('../seeders-data/default-users');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
