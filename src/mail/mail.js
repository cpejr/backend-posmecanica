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
  static sendEmail(request, response, data) {
    const config = {
      from: `${process.env.EMAIL_LOGIN}`,
      ...data
    }
    try {
      transporter.sendMail(config);
      response.status(200).json({ notification: "Email sent successfully" });
    } catch (error) {
      return console.error(error);
    }
    response.status(200).json();
  };
}

module.exports = {
  static ConfirmateAccessAndChangePassword(to, firstname, password) {
    console.log("Usuário cadastrado e email enviado para redefinição de senha")
    //MUDAR AINDA O CONTENT
    const content = `Prezado ${firstname}, sua inscrição foi feita, sua senha gerada automaticamente é ${password}.`
    const subject = "Pós-Mecânica: Inscrição no sistema realizada"

    const emailContent = {
      to: to,
      subject: subject,
      text: content
    };
    return Email.sendEmail(emailContent)
  }
}