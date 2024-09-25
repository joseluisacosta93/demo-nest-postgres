import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { DemoHandler } from './demo.handler';

@Controller('demo')
export class DemoController {
  constructor(private demoHandler: DemoHandler) {}
  @Get()
  findAll() {
    // return data from demo service findAll method
    return this.demoHandler.findAll();
  }

  //post method to create a new demo
  @Post()
  create(@Body() demo) {
    return this.demoHandler.create(demo);
  }
}
