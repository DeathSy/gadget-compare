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
          productId: 1,
          categoryId: 5,
          desc: 'Phone',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 1,
          categoryId: 6,
          desc: 'Operating temperature: 32° to 95° F (0° to 35° C)',
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
        {
          productId: 2,
          categoryId: 5,
          desc: 'Phone',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 6,
          desc: 'Operating temperature: 32° to 95° F (0° to 35° C)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 1,
          desc: '142 mm x 142 mm x 172 mm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 2,
          desc: 'Bluetooth 5.0',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 3,
          desc: '802.11ac Wi-Fi with MIMO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 4,
          desc: '2500 g',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 5,
          desc: 'Apple devices',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 6,
          desc: 'Operating temperature: 32° to 95° F (0° to 35° C)',
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
