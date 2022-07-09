FROM node:current-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install react-axios

RUN npx tailwindcss init -p

RUN npm install react-router-dom@6

RUN npm install react-router

RUN npm install react-sweetalert2

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]