require('dotenv').config();

/**
 * This file is only here to collect all database environments and give them back
 * for the migration process of the sequelize-cli
 *
 * https://codeburn.io/getting-started-migrations-sequelize-nodejs-typescript/
 */

module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'appman',
  },
};
