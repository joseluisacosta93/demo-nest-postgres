import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { DatabaseModule } from './database.module';
import { demoProviders } from './demo.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [DemoController],
  providers: [...demoProviders, DemoService],
})
export class DemoModule {}
