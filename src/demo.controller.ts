import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private demoService: DemoService) {}
  @Get()
  findAll() {
    // return data from demo service findAll method
    return this.demoService.findAll();
  }

  //post method to create a new demo
  @Post()
  
  create(@Body( ) demo) {
    return this.demoService.create(demo);
  }
}
