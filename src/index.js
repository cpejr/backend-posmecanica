require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const routes = require('./routes');

const port = process.env.PORT || 3333;

const app = express();

const corsOptions = {
  exposedHeaders: 'X-Total-Count',
};


const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "PosMecanica - Swagger",
      description: "Documentação do projeto desenvolvido pela Tribo Draconis em 2021/1.",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3333"
      },
    ],
  },
  apis: ["./src/routes/**/documentacao/*.js"],
}

const specs = swaggerJsDoc(swaggerOptions);

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
