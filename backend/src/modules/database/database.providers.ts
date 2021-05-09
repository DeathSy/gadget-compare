import { Sequelize } from 'sequelize-typescript';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
import { Spec } from '../spec/spec.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'appman',
      });
      sequelize.addModels([Category, Product, Spec]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
