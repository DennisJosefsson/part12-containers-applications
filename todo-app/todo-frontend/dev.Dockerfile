FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN mkdir -p /node_modules

RUN chown node:node /node_modules
RUN npm install


CMD ["npm", "start"]