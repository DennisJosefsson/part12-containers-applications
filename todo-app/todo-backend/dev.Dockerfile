FROM node:16

WORKDIR /

COPY --chown=node:node . .

RUN npm install 

ENV DEBUG=todo-backend:*
CMD npm run dev