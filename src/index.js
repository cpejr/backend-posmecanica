require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cron = require('node-cron');
const moment = require('moment');
const shell = require('shelljs');
const SelectiveProcessModel = require('./models/SelectiveProcessModel');

const sendEmail = require('./utils/CronJobSelectiveProcess');
const routes = require('./routes');
const FirebaseStore = require('./utils/FirebaseStore');

const port = process.env.PORT || 3333;

const app = express();

const corsOptions = {
  exposedHeaders: 'X-Total-Count',
};

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'PosMecanica - Swagger',
      description: 'Documentação do projeto desenvolvido pela Tribo Sirius.',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3333',
      },
    ],
  },
  apis: ['./src/routes/**/doc/*.js'],
};

const specs = swaggerJsDoc(swaggerOptions);

FirebaseStore.config();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
  // http://localhost:3333/api-docs/#/ (URL para acessar documentação)
);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

shell.exec('yarn');

shell.exec('npx knex migrate:latest');

const selective_processes = async () => {
  const teste = await SelectiveProcessModel.getUnfinishedSelectiveProcesses();
  return teste;
};

selective_processes().then((resp) => {
  resp?.forEach((response) => {
    let data = moment(response.process_date_end).add(1, 'days');
    data = new Date(data);
    const day = data.getDate().toString();
    const month = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const year = data.getFullYear();

    cron.schedule(`0 0 ${day} ${month} *`, () => {
      const currentDate = new Date().getFullYear();
      if (currentDate === year) {
        sendEmail.sendEmailToProfessors(response.process_id);
      }
    });
  });
});
