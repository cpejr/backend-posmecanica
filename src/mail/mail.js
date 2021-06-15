/* eslint-disable consistent-return */
require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class Email {
  static sendEmail(request) {
    const config = {
      from: `${process.env.EMAIL_LOGIN}`,
      ...request,
    };
    try {
      transporter.sendMail(config);
    } catch (error) {
      return console.error(error);
    }
  }
}

module.exports = {
  ConfirmateAccessAndChangePassword(to, firstname, password) {
    const content = `Prezado ${firstname}, sua inscrição foi feita. Sua senha foi atualizada para: ${password}.`;
    const subject = 'Pós-Mecânica: Inscrição no sistema realizada';

    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },
  ChangeEmail(to, firstname, newEmail) {
    const content = `Prezado ${firstname}, seu email foi atualizado para: ${newEmail}.`;
    const subject = 'Pós-Mecânica: Email Atualizado';

    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },

  ConfirmateCreateUser(to, firstname, password) {
    const content = `Olá ${firstname}! Sua conta foi criada com sucesso. A sua senha é ${password}`;
    const subject = 'Pós-Mecânica: Inscrição no sistema realizada';
    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },
  SelectiveProcessResult(to, firstname, result, position) {
    const confirmation = result ? 'Aprovado' : 'Reprovado';
    const content = `Olá ${firstname}, você foi ${confirmation} no processo seletivo. Sua colocação na prova foi ${position}° lugar`;
    const subject = 'Pós-Mecânica: Resultado Inscrição';
    const emailContent = {
      to,
      subject,
      text: content,
    };
    console.log(emailContent);
    return Email.sendEmail(emailContent);
  },
};
