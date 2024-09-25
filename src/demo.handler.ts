import { Injectable, Logger } from '@nestjs/common';
import { DemoRepository } from './demo.repository';
import { Demo } from './demo.schema';

@Injectable()
export class DemoHandler {
    private readonly DemoRepository: DemoRepository;
    constructor(private readonly demoRepository: DemoRepository) {
        this.DemoRepository = demoRepository;
    }
    async findAll() {
        return await this.demoRepository.findAll();
    }

    async create(demo: Demo) {
        return await this.demoRepository.create(demo);
    }
}