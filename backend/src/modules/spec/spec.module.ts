import { Module } from '@nestjs/common';
import { specProviders } from './spec.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...specProviders],
})
export class SpecModule {}
