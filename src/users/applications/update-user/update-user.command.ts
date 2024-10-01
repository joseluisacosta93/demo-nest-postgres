export class UpdateUserCommand {
    readonly id: number;
    readonly query: {
        name: string;
        email: string;
    };
  
    constructor(readonly data: UpdateUserCommand) {
      Object.assign(this, data);
    }
  }