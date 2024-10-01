import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../schema/users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async create(user: Users) {
    return this.userRepository.save(user);
  }

  async update(id: number, query: {name: string; email: string}) {
    return this.userRepository.update(id, query);
  }

  async delete(id: number) {
    return this.userRepository.delete(id);
  }

  async findById(id) {
    return this.userRepository.findOne({where: {id}});
  }
}
