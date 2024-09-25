// user controller
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserHandler } from './user.handler';

@Controller('user')
export class UserController {
  constructor(private readonly userHandler: UserHandler) {}

  @Get()
  findAll() {
    return this.userHandler.findAll();
  }

  @Post()
  create(@Body() user) {
    return this.userHandler.create(user);
  }
}
