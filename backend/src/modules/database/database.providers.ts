import { Sequelize } from 'sequelize-typescript';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
import { Spec } from '../spec/spec.entity';
require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Category, Product, Spec]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
