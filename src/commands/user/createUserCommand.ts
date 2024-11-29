import { UserFactory } from "../../factories/userFactory";
import { IDatabaseAdapter } from "../../adapters/databaseAdapter";

export class CreateUserCommand {
  constructor(
    private databaseAdapter: IDatabaseAdapter,
    private name: string,
    private email: string
  ) {}

  async execute() {
    const user = UserFactory.createUser(this.name, this.email);
    await this.databaseAdapter.saveUser(user);
  }
}
