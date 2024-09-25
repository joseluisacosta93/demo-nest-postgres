export class CreateAdminCommand {
  readonly id: number;
  readonly name: string;
  readonly lastName: string;
  readonly orgId: number;
  readonly orgName: string;
  readonly email: string;

  constructor(readonly data: CreateAdminCommand) {
    Object.assign(this, data);
  }
}
