FROM node:latest

WORKDIR /app

COPY package.json/app

RUN npm install

COPY . /app

CMD node server.js

EXPOSE 8000

