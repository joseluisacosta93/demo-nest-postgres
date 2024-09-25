// user module
 import { Module } from '@nestjs/common';
 import { UserController } from './user.controller';
 import { UserHandler } from './user.handler';
 import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.schema';
 
 @Module({
   imports: [TypeOrmModule.forFeature([
    User,

  ]),
  ],
   controllers: [UserController],
   providers: [UserHandler,UserRepository],
 })
 export class UserModule {}