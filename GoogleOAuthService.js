/* eslint-disable camelcase */
const { google } = require("googleapis");
const CredentialsModel = require("../models/CredentialsModel");

const SCOPES = [
  "https://mail.google.com/",
  "https://www.googleapis.com/auth/drive",
];

let oAuth2Client;

const CREDENTIALS = {
  client_id: process.env.OAUTH2_CLIENT_ID,
  project_id: process.env.OAUTH2_PROJECT_ID,
  auth_uri: process.env.OAUTH2_AUTH_URI,
  token_uri: process.env.OAUTH2_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.OAUTH2_AUTH_PROVIDER,
  client_secret: process.env.OAUTH2_CLIENT_SECRET,
  redirect_uris: process.env.OAUTH2_REDIRECT_URIS.split(","),
  javascript_origins: process.env.OAUTH2_JAVASCRIPT_ORIGINS.split(","),
};

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 */
function generateAccessTokenUrl() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return authUrl;
}

module.exports.config = async function config() {
  // Load client secrets from a local file.
  const { client_secret, client_id, redirect_uris } = CREDENTIALS;

  oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  oAuth2Client.on("tokens", (newToken) => {
    CredentialsModel.updateCredentials(newToken);
  });

  // Check if we have previously stored a token.
  const tokenData = await CredentialsModel.getCredentials();

  if (tokenData && tokenData.refresh_token)
    oAuth2Client.setCredentials(tokenData);
  else
    console.log(`
    Token não encontrado, ou não está na base. Siga as instruções:
      1) Acesse a conta gmail do PayPaid
      2) Acesse o link: 'https://myaccount.google.com/u/2/permissions'
      3) Em 'Apps de terceiros com acesso à conta' remova o acesso desse projeto.
      4) Autorize o applicativo novamente no link: 
      ${generateAccessTokenUrl()}
    `);
};

module.exports.validateCredentials = async function validateCredentials(code) {
  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, newToken) => {
      if (err) {
        console.error(`Error retrieving access token`, err);

        return reject(err);
      }
      oAuth2Client.setCredentials(newToken);
      return resolve();
    });
  });
};

module.exports.updateToken = async (newToken) => {
  await CredentialsModel.updateCredentials(newToken);
  oAuth2Client.setCredentials(newToken);
};

module.exports.getOAuth2Client = () => oAuth2Client;
