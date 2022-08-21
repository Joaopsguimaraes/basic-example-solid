/**
 * @interface IAdress -> tipagem para o endereço de email
 */

interface IAdress {
  email: string;
  name: string;
}

/**
 * @interface IMessage -> tipagem para a mensagem de e-mail
 */

export interface IMessage {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

/**
 * @interface IMailProvider -> tipagem para o serviço de envio de e-mails
 */

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
