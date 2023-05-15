FROM node:16

WORKDIR /

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=todo-backend:*
CMD npm start