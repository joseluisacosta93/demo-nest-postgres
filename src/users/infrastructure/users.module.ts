import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserHandler } from '../applications/create-user/create-user.handler';
import { GetUsersHandler } from '../applications/get-users/get-users.handler';
import { UpdateUserHandler } from '../applications/update-user/update-user.handler';

import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { Users } from './schema/users.schema';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersRepository, CreateUserHandler, GetUsersHandler,UpdateUserHandler],
})
export class UsersModule {}
