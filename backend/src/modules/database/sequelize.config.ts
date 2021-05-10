require('dotenv').config();

/**
 * This file is only here to collect all database environments and give them back
 * for the migration process of the sequelize-cli
 *
 * https://codeburn.io/getting-started-migrations-sequelize-nodejs-typescript/
 */

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: true,
  },
};
