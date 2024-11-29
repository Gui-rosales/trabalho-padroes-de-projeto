import { Request, Response } from "express";
import { DatabaseAdapter } from "../../adapters/databaseAdapter";
import { CreateUserCommand } from "../../commands/user/createUserCommand";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;

    try {
      const databaseAdapter = new DatabaseAdapter();
      const command = new CreateUserCommand(databaseAdapter, name, email);
      await command.execute();

      res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error creating user." });
    }
  }
}
