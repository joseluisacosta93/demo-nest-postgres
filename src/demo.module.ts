import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';
import { DemoHandler } from './demo.handler';
import { UserModule } from './user/user.module';
import { Demo } from './demo.schema';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'poc-nest-postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Demo]),
  ],
  controllers: [DemoController],
  providers: [DemoRepository, DemoHandler],
})
export class DemoModule {}
