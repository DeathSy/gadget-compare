import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  Scopes,
} from 'sequelize-typescript';
import { Category } from '../category/category.entity';
import { Spec } from '../spec/spec.entity';

@Scopes(() => ({
  full: {
    include: [
      {
        model: Spec,
        include: [Category],
      },
    ],
  },
}))
@Table
export class Product extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  name: string;

  @Column({ type: DataType.DECIMAL(10, 2) })
  price: number;

  @HasMany(() => Spec)
  specs: Spec[];
}
