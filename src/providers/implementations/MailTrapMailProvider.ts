import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

/**
 * @class MailTrapMailProvider -> tem a única responsabilidade de enviar
 * e-mails usando o MailTrap como serviço de envio de e-mails
 */

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "",
        pass: "",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
