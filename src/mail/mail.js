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

module.exports = {
  async sendMail(destinatarioEmail,titulo,texto) {
    const config = {
      from: 'Pós Mecânica UFMG <posmecanica.ufmg@gmail.com>',
      to: destinatarioEmail,
      subject: titulo,
      text: texto,
    };
    const mailSent = await transporter.sendMail(config, (err, info) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Email sent!');
      }
    });
  },
};
