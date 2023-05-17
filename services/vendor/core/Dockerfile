FROM node:18
WORKDIR /usr/src/app

COPY ./services/vendor/core/package*.json ./

RUN npm install

COPY ./services/vendor/core .

RUN npm run build

CMD [ "node", "dist/main.js" ]
