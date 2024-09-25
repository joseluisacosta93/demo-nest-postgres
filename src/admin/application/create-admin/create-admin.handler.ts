import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { AdminRepository } from '../../infrastructure/repositories/admin.repository';

import { CreateAdminCommand } from './create-admin.command';

@CommandHandler(CreateAdminCommand)
export class CreateAdminHandler implements ICommandHandler<CreateAdminCommand> {
  constructor(private readonly adminRepository: AdminRepository) {}

  async execute(command: CreateAdminCommand) {
    return this.adminRepository.create(command);
  }
}
