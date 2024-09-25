import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';
import { DatabaseModule } from './database.module';
import { demoProviders } from './demo.provider';
import { DemoHandler } from './demo.handler';

@Module({
  imports: [DatabaseModule],
  controllers: [DemoController],
  providers: [...demoProviders, DemoRepository, DemoHandler],
})
export class DemoModule {}
