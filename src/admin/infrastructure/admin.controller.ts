import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateAdminCommand } from '../application/create-admin/create-admin.command';
import { GetAdminsQuery } from '../application/get-admins/get-admins.query';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  findAll() {
    return this.queryBus.execute(new GetAdminsQuery());
  }

  @Post()
  create(@Body() body) {
    return this.commandBus.execute(new CreateAdminCommand(body));
  }
}
