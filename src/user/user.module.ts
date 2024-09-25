import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserHandler } from './user.handler';
import { UserRepository } from './user.repository';
import { User } from './user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserHandler, UserRepository],
})
export class UserModule {}
