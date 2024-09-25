export class CreateUserCommand {
  readonly id: number;
  readonly name: string;
  readonly email: string;

  constructor(readonly data: CreateUserCommand) {
    Object.assign(this, data);
  }
}
