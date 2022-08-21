import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/Implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailTrapMailProvider();
const postegresUserRepository = new PostgresUsersRepository();
const createUserUseCase = new CreateUserUseCase(
  postegresUserRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
