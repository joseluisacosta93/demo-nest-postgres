//demo.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Demo } from './demo.schema';

@Injectable()
export class DemoRepository {
  constructor(
    @Inject('DemoRepository')
    private readonly demoRepository: Repository<Demo>,
  ) {}

  async findAll() {
    return await this.demoRepository.find();
  }

  async create(demo: Demo) {
    return await this.demoRepository.save(demo);
  }

  async update(id: number, demo: Demo) {
    return await this.demoRepository.update(id, demo);
  }

  async delete(id: number) {
    return await this.demoRepository.delete(id);
  }
}
