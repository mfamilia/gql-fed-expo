FROM node:18
WORKDIR /usr/src/app

COPY ./mesh/package*.json ./

RUN npm install

COPY ./mesh .

CMD [ "npm", "start" ]
