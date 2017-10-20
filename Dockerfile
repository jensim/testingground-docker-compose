FROM node:boron

WORKDIR /usr/src/app

COPY backend/package.json .
RUN npm i
COPY backend/ .
RUN rm -rf public
COPY frontend/ frontend/
RUN cd frontend && npm i && cd .. && mv frontend/dist public && rm -rf frontend

EXPOSE 3000

CMD [ "npm", "start" ]