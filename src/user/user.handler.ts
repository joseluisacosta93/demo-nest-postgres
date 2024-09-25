import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.schema';

@Injectable()
export class UserHandler {
  constructor(private readonly userRepository: UserRepository) {}
  findAll() {
    return this.userRepository.findAll();
  }

  create(user: User) {
    return this.userRepository.create(user);
  }
}
