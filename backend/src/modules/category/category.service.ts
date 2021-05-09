import { Inject, Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepo: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    try {
      const categories = await this.categoryRepo.findAll();
      return Promise.resolve(categories);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
