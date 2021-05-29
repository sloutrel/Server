FROM registry.hub.docker.com/library/node:16-alpine3.11

COPY app.js app.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

EXPOSE 3000

ENTRYPOINT npm start
