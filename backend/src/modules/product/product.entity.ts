import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
