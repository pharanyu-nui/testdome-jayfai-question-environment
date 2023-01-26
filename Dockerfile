FROM node:14.20.0-slim

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .
