import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemoHandler } from './demo.handler';

@Controller('demo')
export class DemoController {
  constructor(private demoHandler: DemoHandler) {}
  @Get()
  findAll() {
    return this.demoHandler.findAll();
  }

  @Post()
  create(@Body() demo) {
    return this.demoHandler.create(demo);
  }
}
