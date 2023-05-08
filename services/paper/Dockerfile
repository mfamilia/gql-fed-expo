FROM node:18
WORKDIR /usr/src/app

COPY ./services/paper/package*.json ./

RUN npm install

COPY ./services/paper .

RUN npm run build

CMD [ "node", "dist/main.js" ]
