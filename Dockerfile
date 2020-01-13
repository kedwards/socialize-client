FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .npmrc ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]