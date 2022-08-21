import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

/**
 * @class CreateUserUseCase tem a responsabilidade de criar um usuário
 */

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  
  /**
   * @function execute -> método principal do useCase de users, 
   * validando se o usuário ja existe criando o usuário, e 
   * envio de email de boas vindas
   */
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      //validando se o usuário recebido na request ja existe
      throw new Error("User already exists.");
    }

    const user = new User(data);
    //passando os dados do usuário para o construtor do usuário

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do Meu App",
        email: "equipe@meuapp.com",
      },
      subject: "Seja bem-vindo",
      body: "<p>Você já pode fazer login em nossa plataforma.</p>",
    });
  }
}
