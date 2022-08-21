/**
 * @interface CreateUserDTO -> contrato DTO (Data transfer object) para criar um usuário
 */

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
