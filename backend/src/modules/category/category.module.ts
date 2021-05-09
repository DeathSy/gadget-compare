import { Module } from '@nestjs/common';
import { categoryProviders } from './category.providers';
import { DatabaseModule } from '../database/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders, CategoryService],
})
export class CategoryModule {}
