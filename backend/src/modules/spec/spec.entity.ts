import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Table
export class Spec extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;

  @Column({ allowNull: false })
  desc: string;

  @BelongsTo(() => Product, {
    foreignKey: 'productId',
    targetKey: 'id',
    constraints: false,
    foreignKeyConstraint: false,
  })
  product: Product;

  @BelongsTo(() => Category, {
    foreignKey: 'categoryId',
    targetKey: 'id',
    constraints: false,
    foreignKeyConstraint: false,
  })
  category: Category;
}
