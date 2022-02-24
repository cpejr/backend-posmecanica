FROM node:16.13

WORKDIR /usr/PosMecanica/backend-posmecanica

COPY . ./
COPY package*.json ./

RUN yarn config set strict-ssl false

RUN yarn install

EXPOSE 3333

CMD ["yarn", "production"]