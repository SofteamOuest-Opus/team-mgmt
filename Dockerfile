FROM node:11.3.0

MAINTAINER olivier.graton@softeam.fr

WORKDIR /apps/teams

COPY .babelrc ./
COPY package.json ./
RUN npm install
COPY /app ./app
#COPY /flyway ./flyway
#COPY docker-entrypoint.sh ./

EXPOSE 3000

