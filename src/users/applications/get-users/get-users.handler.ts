import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { UsersRepository } from 'src/users/infrastructure/repositories/users.repository';

import { GetUsersQuery } from './get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id=null) {
    if (id) return this.usersRepository.findById(id);
    return this.usersRepository.findAll();
  }
}
