import { v4 as uuidv4 } from "uuid";

/**
 * @class user -> E a entidade que representa o usuário e quais sãos seus atributos
 */

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
