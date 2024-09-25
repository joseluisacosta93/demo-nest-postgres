import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from '../admin.schema';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async findAll() {
    return this.adminRepository.find();
  }

  async create(admin: Admin) {
    return this.adminRepository.save(admin);
  }

  async update(id: number, admin: Admin) {
    return this.adminRepository.update(id, admin);
  }

  async delete(id: Admin) {
    return this.adminRepository.delete(id);
  }
}
