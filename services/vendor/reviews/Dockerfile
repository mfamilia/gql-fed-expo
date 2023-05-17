FROM node:18
WORKDIR /usr/src/app

COPY ./services/vendor/reviews/package*.json ./

RUN npm install

COPY ./services/vendor/reviews .

RUN npm run build

CMD [ "node", "dist/main.js" ]
