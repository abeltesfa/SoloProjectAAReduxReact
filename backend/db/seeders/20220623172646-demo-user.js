'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'lebron@nba.com',
        username: 'KingJames',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'steph@nba.com',
        username: 'ChefCurry',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'kevin@nba.com',
        username: 'KevinDurant',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'luka@nba.com',
        username: 'LukaDoncic',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'giannis@nba.com',
        username: 'GiannisAntetokounmpo',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
