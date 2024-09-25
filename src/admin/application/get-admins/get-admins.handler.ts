import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { AdminRepository } from 'src/admin/infrastructure/repositories/admin.repository';

import { GetAdminsQuery } from './get-admins.query';

@QueryHandler(GetAdminsQuery)
export class GetAdminsHandler implements IQueryHandler<GetAdminsQuery> {
  constructor(private readonly adminRepository: AdminRepository) {}

  async execute() {
    return this.adminRepository.findAll();
  }
}
