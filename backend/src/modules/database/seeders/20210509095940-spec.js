'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Specs',
      [
        {
          productId: 1,
          categoryId: 1,
          desc: '235 mm x 84 mm x 84 mm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 1,
          categoryId: 2,
          desc: 'Bluetooth® 5.0',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 1,
          categoryId: 3,
          desc: '802.11b/g/n',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 1,
          categoryId: 4,
          desc: '470 g',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 1,
          desc: '98 mm x 98 mm x 42 mm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 2,
          desc: 'Bluetooth® 5.0',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 3,
          desc: '802.11b/g/n/ac',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 4,
          desc: '180 g',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specs', null, {});
  },
};
