/* eslint-disable prettier/prettier */
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
  DemandProcess(to, name, disciplines) {
    const content = `Olá ${name}, você possui candidatos a serem deferidos no processo seletivo respectivos ${disciplines.length === 1 ? 'à disciplina' : 'às disciplinas'
      }${disciplines.map((item) => {
        if (
          item.discipline_name ===
          disciplines[disciplines.length - 1].discipline_name
        ) {
          return ` ${item.discipline_name}.`;
        }
        return ` ${item.discipline_name}`;
      })}
      
Atenciosamente, Administração do Programa de Pós Graduação em Mecânica.`;
    const subject = 'Pós-Mecânica: Demanda de candidatos.';
    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },

  EnrollmentProof(to, nameSelectiveProcessName, protocolNumber) {
    const content = `Prezado(a), confirmamos sua inscrição no ${nameSelectiveProcessName} com o seguinte número de protocolo: ${protocolNumber}.
      
    Atenciosamente, Administração do Programa de Pós Graduação em Mecânica.`;
    const subject = 'Inscrição no Processo Seletivo.';
    const emailContent = {
      to,
      subject,
      text: content,
    };
    return Email.sendEmail(emailContent);
  },
};
