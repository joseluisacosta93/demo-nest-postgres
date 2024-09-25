import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async create(user: User) {
    return await this.userRepository.save(user);
  }

  async update(id: number, user: User) {
    return await this.userRepository.update(id, user);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
