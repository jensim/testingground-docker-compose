FROM node:boron

WORKDIR /usr/src/app

COPY backend/package.json .
RUN npm i
COPY backend/app.js .

EXPOSE 3000

CMD [ "npm", "start" ]