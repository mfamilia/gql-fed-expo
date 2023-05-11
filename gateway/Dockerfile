FROM node:18
WORKDIR /usr/src/app

COPY ./gateway/package*.json ./

RUN npm install

COPY ./gateway .

CMD [ "npm", "start" ]
