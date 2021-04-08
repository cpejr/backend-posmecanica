const nodemailer = require("nodemailer");
const GoogleOauth = require("./GoogleOAuthService");

let transporter;
function sendEmail(data) {
  const from =
    process.env.NODE_ENV !== "test"
      ? process.env.EMAIL_USER
      : process.env.TEST_EMAIL_USER;

  const config = {
    from,
    to: data.to,
    subject: data.subject,
    text: data.text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(config, (error, info) => {
      if (error) return reject(error);

      const testString = nodemailer.getTestMessageUrl(info);
      if (testString) return resolve(config);
      return resolve(info);
    });
  });
}

module.exports = {
  async config() {
      const oAuth2Client = GoogleOauth.getOAuth2Client();
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: `${process.env.EMAIL_USER}`,
          clientId: `${process.env.OAUTH2_CLIENT_ID}`,
          clientSecret: `${process.env.OAUTH2_CLIENT_SECRET}`,
          refreshToken: oAuth2Client.credentials.refresh_token,
          accessToken: oAuth2Client.credentials.access_token,
          expires: oAuth2Client.credentials.expiry_date,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      transporter.on("token", (token) => {
        // Store the token in to the database
        GoogleOauth.updateToken({
          access_token: token.accessToken,
          expiry_date: token.expires,
        });
      });
  },

  userPasswordEmail(to, url) {
    const content = `Solicitação de alteração de senha 
    Caso queira alterá-la acesse este link: ${url}
    Este link irá expirar em 10 minutos. 
    Se você não efetuou este pedido, ignore e elimine esta mensagem.`;

    const subject = "PayPaid: Redefinir senha";
    const emailContent = {
      to,
      subject,
      text: content,
    };
    return sendEmail(emailContent);
  },

  userCodeEmail(to, code) {
    const content = `Bem vindo ao PayPaid!\n seu código de acesso é: ${code}`;
    const subject = "PayPaid: código de cadastro";
    const emailContent = {
      to,
      subject,
      text: content,
    };
    return sendEmail(emailContent);
  },
};
