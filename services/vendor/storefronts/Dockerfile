FROM node:18
WORKDIR /usr/src/app

COPY ./services/member/package*.json ./

RUN npm install

COPY ./services/member .

RUN npm run build

CMD [ "node", "dist/main.js" ]
