import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  department: string;

  @Column()
  price: string;

  @Column()
  material: string;

  @Column()
  dimension: string;

  @Column()
  weight: number;

  @CreateDateColumn()
  createdAt: Date;
}
