import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  sequence: number;
}
