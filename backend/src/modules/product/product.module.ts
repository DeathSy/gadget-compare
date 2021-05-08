import { Module } from '@nestjs/common';
import { productProviders } from './product.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders],
})
export class ProductModule {}
