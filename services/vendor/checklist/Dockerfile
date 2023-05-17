FROM node:18
WORKDIR /usr/src/app

COPY ./services/vendor/checklist/package*.json ./

RUN npm install

COPY ./services/vendor/checklist .

RUN npm run build

CMD [ "node", "dist/main.js" ]
