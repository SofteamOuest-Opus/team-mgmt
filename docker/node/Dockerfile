FROM node:11.3.0

MAINTAINER olivier.graton@softeam.fr

WORKDIR /apps/teams

COPY ../../.babelrc ./
COPY ../../package.json ./
COPY /app ./app
RUN ls -la
RUN npm install

EXPOSE 3000


CMD ["npm" ,"run", "start"]