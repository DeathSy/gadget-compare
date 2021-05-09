import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    try {
      const categories = await this.categoryService.findAll();
      return categories;
    } catch (err) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
