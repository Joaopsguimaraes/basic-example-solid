import { User } from "../entities/User";

/**
 * @interface IUserRepository  -> tem a responsabilidade de salvar um usuário e validar se o
 * o usuário já existe pelo email
 *
 * Geralmente, o repositório é responsável por dizer quais sao os métodos da entidade
 */

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
