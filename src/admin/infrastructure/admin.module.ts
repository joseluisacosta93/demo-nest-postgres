import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateAdminHandler } from '../application/create-admin/create-admin.handler';
import { GetAdminsHandler } from '../application/get-admins/get-admins.handler';

import { AdminController } from './admin.controller';
import { AdminRepository } from './repositories/admin.repository';
import { Admin } from './admin.schema';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), CqrsModule],
  providers: [AdminRepository, CreateAdminHandler, GetAdminsHandler],
  controllers: [AdminController],
})
export class AdminModule {}
