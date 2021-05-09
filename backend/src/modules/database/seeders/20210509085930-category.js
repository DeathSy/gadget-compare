'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Size',
          sequence: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bluetooth Connectivity',
          sequence: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Wi-Fi Connectivity',
          sequence: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Weight',
          sequence: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
