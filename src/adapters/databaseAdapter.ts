import { IUser } from "../models/user";

export interface IDatabaseAdapter {
  saveUser(user: IUser): Promise<void>;
}

export class DatabaseAdapter implements IDatabaseAdapter {
  async saveUser(user: IUser): Promise<void> {
    // Simula a persistência (pode ser integrado com qualquer banco de dados)
    console.log("User saved to database:", user);
  }
}
