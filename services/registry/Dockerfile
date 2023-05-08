FROM node:18
WORKDIR /usr/src/app

COPY ./services/registry/package*.json ./

RUN npm install

COPY ./services/registry .

RUN npm run build

CMD [ "node", "dist/main.js" ]
