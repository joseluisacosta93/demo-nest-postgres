export class DeleteUserCommand {
    readonly id: number;
  
    constructor(readonly data: DeleteUserCommand) {
      Object.assign(this, data);
    }
  }