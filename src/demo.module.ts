import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';

import { DemoHandler } from './demo.handler';
import { UserModule } from './user/user.module';
import { Demo } from './demo.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ UserModule,TypeOrmModule.forRoot({

        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'demo',
        entities: [Demo],
        synchronize: true,

    autoLoadEntities: true,
  }),
    TypeOrmModule.forFeature([
      Demo,

    ]),
  ],
  controllers: [DemoController],
  providers: [ DemoRepository, DemoHandler],
})
export class DemoModule {}
