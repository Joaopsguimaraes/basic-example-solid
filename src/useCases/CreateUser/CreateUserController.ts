import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
/**
 * @class CreateUserController tem a responsabilidade de receber a requisição,
 * chamar o caso de uso da entidade e devolver a resposta.
 */

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  /**@function handle -> função responsável por criar o usuário a partir co createUserUseCase */
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
