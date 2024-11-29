import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";

export class UserFactory {
  static createUser(name: string, email: string) {
    const id = uuidv4();
    return new User(id, name, email);
  }
}
