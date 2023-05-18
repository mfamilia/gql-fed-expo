FROM node:18
WORKDIR /usr/src/app

COPY ./mesh/package*.json ./

RUN npm install

COPY ./mesh .

RUN sed -i -e "s#localhost#host.docker.internal#" .meshrc.yaml 

RUN DEBUG=1 npm run build

CMD [ "npm", "start" ]
