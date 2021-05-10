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
      'Products',
      [
        {
          name: 'Amazon Echo',
          price: 4999,
          preview:
            'https://th-test-11.slatic.net/p/1bda13cdac8b1de614d7bb06771b1f33.jpg_720x720q80.jpg_.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Google Nest Mini (2nd gen)',
          price: 1490,
          preview:
            'https://cf.shopee.co.th/file/3f0ec840b337a826eb6c59fe30a7999e',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'HomePod',
          price: 9280,
          preview:
            'https://atlas-content-cdn.pixelsquid.com/stock-images/apple-homepod-speaker-N4Vld24-600.jpg',
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
    return queryInterface.bulkDelete('Products', null, {});
  },
};
