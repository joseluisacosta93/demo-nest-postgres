import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UsersRepository } from 'src/users/infrastructure/repositories/users.repository';

import { UpdateUserCommand } from './update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: UpdateUserCommand) {
    return this.usersRepository.update(command.id, command.query);
  }
}
