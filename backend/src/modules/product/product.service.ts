import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private readonly productRepo: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.productRepo.scope('full').findAll();
      return Promise.resolve(products);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findById(id: number): Promise<Product> {
    try {
      const product = await this.productRepo.scope('full').findByPk(id);
      return Promise.resolve(product);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
