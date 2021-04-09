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
    const content = `Prezado ${firstname}, sua inscrição foi feita, sua senha foi atualizada para: ${password}.`;
    const subject = 'Pós-Mecânica: Inscrição no sistema realizada';

    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },
};
