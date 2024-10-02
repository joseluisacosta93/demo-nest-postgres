import { Controller, Get, Post, Body, Patch  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from '../applications/get-users/get-users.query';
import { CreateUserCommand } from '../applications/create-user/create-user.command';
import { UpdateUserCommand } from '../applications/update-user/update-user.command';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  findAll() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Post()
  create(@Body() user) {
    return this.commandBus.execute(new CreateUserCommand(user));
  }
  @Patch()
  update(@Body() user) {
    return this.commandBus.execute(new UpdateUserCommand(user));
  }
}
